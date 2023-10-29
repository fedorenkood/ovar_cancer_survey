import connexion
import six

from swagger_server import util
import json


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
    return 0.09
