import connexion
import six

from swagger_server import util
import json
from oop_functions.analytics_utils import *
import pandas as pd

def convert_mapping_to_dict(my_mapping):
    name_to_choices_mapping = {}
    for mapping in my_mapping:
        for name in mapping["name"]:
            name_to_choices_mapping[name] = mapping["choices"]
    return name_to_choices_mapping

def survey_results_parser(survey_result, my_mapping):

    true_false_mapping = {
        "True": 1,
        "False": 0,
    }
    parsed_survey_result = {}
    name_to_choices_mapping = convert_mapping_to_dict(my_mapping)
    for key, val in survey_result.items():
        if key in name_to_choices_mapping:
            parsed_survey_result[key] = name_to_choices_mapping[key][val]
        elif val in ["True", "False"]:
            parsed_survey_result[key] = true_false_mapping[val]
        else:
            parsed_survey_result[key] = val
    return parsed_survey_result

my_mapping = [
    {
        "name": ["ca125_result", "ovar_result", "tvu_result"],
        "choices": {
            "Negative": 1,
            "Abnormal, Suspicious": 2,
            "Abnormal, non-suspicious": 3,
            "Inadequate Screen": 4,
            "Not Done, Expected": 8,
            "Not Done, Not Expected": 9,
        },
    },
    {
        "name": ["tvu_ref"],
        "choices": {
            "Significant Abnormality, Referral": 1,
            "Moderate Abnormality, Referral": 2,
            "Slight Variation from Normal, No Referral": 3,
            "Normal / Result Not Available, No Referral": 4,
        }
    },
    {
        "name": ["ca125ii_level_binary"],
        "choices": {
            "True": 2,
            "False": 1,
        }
    },
    {
        "name": ["ovcyst_morph"],
        "choices": {
            "Not visualized": 0,
            "No solid area and outline smooth": 1,
            "Mixed solid area or outline irregular or outline papillaries": 2,
            "Solid area": 3,
        },
    },
    {
        "name": ["ovcyst_sum"],
        "choices": {
            "Not visualized": 0,
            "< 3cm, no solid area and smooth outline": 1,
            "< 3cm, mixed solid area or irregular/papillary outline" : 2,
            "< 3cm, solid area": 3,
            "3 -< 6cm, no solid area and smooth outline": 4,
            "3 -< 6cm, mixed solid area or irregular/papillary outline": 5,
            "3 -< 6cm, solid area" : 6,
            "6+ cm, no solid area and smooth outline": 7,
            "6+ cm, mixed solid area or irregular/papillary outline": 8,
            "6+ cm, solid area": 9,
        }
    }
    ]


def api1_year_prediction_post(body):  # noqa: E501
    """Get 1-Year Prediction

    This endpoint predicts a value based on the provided dictionary of type Dict[str, Union[str, int]].  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: float
    """
    if connexion.request.is_json:

        body = connexion.request.get_json() # noqa: E501
        print(body)
        survey_result = body
        parsed_survey_result = survey_results_parser(survey_result, my_mapping)
        X_predict = pd.DataFrame(parsed_survey_result, index=[0])
        cols = ['bmi_20', 'bmi_50', 'bmi_curr', 'ca125_result', 'ca125ii_level',
            'ca125ii_level_binary', 'detl_p', 'detr_p', 'lantero_p', 'maxdi',
            'ovar_result', 'ovary_diam', 'ovary_diamr', 'ovary_vol', 'ovary_voll',
            'ovary_volr', 'ovcyst_diam', 'ovcyst_diaml', 'ovcyst_diamr',
            'ovcyst_morph', 'ovcyst_sum', 'ovcyst_vol', 'ovcyst_voll',
            'ovcyst_volr', 'rantero_p', 'rlong_p', 'rtran_p', 'tvu_ref',
            'tvu_result', 'viseith', 'visl', 'volum', 'weight20_f', 'weight50_f',
            'weight_f']
        X_predict = X_predict[cols]


        filesuffix = '_for_experiment_participants_screened_single_first_5_top_35_features_RandomForestClassifier_cancer_in_next_1_years__1_trials'
        cv_analytics_util = load_cv_analytics_utils_no_datasets(filesuffix)

        # cv_analytics_util = CvAnalyticsUtil.load_cv_analytics_utils(filesuffix)
        # full_dataset = cv_analytics_util.get_dataset_with_predictions()
        # cols = cv_analytics_util.analytics_utils[0].data_util.get_test_data()[0].columns

        # Predicting actual cancer probability using bucketing
        per_thereshold_metrics = pd.read_csv('./per_threshold_metrics/_for_experiment_participants_screened_single_first_5_top_35_features_RandomForestClassifier_cancer_in_next_1_years__15_trials.csv')

        pred, prob = cv_analytics_util.analytics_utils[0].get_predictions_general(X_predict)

        fraction = map_prob_to_bucket(per_thereshold_metrics, prob[0])
        return fraction
    return 400, "Bad Request"
