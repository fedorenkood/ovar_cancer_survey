export const json = {
  completedHtml: "<h3>Thank you for your feedback</h3> <h5>Your thoughts and ideas will help us improve our product.</h5>",
  // completedHtmlOnCondition: [{
  //   expression: "{nps_score} > 8",
  //   html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h5>"
  // }, {
  //   expression: "{nps_score} < 7",
  //   html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you shared your ideas with us. They will help us make our product better.</h5>"
  // }],
  pages: [{
    name: "page1",
    elements: [
      {
        "type": "text",
        "name": "ca125ii_level",
        "title": "What is your CA-125? Values range from 1 to 4980.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 1,
            "maxValue": 4980
          }
        ],
        "defaultValue": [
          12
        ]
      },
      {
        "type": "radiogroup",
        "name": "ca125ii_level_binary",
        "title": "Is your CA-125 level normal? ",
        "choices": [
          "True",
          "False"
        ],
        "defaultValue": [
          "True"
        ]
      },
      {
        "type": "radiogroup",
        "name": "ca125_result",
        "title": "CA-125 screen result.",
        "choices": [
          "Negative",
          "Abnormal, Suspicious",
          "Inadequate Screen",
          "Not Done, Expected",
          "Not Done, Not Expected"
        ],
        "defaultValue": [
          "Not Done, Not Expected"
        ]
      },
      {
        "type": "radiogroup",
        "name": "ovar_result",
        "title": "Combined ovarian screening result. ",
        "choices": [
          "Negative",
          "Abnormal, Suspicious",
          "Inadequate Screen",
          "Not Done, Expected",
          "Not Done, Not Expected"
        ],
        "defaultValue": [
          "Negative"
        ]
      },
      {
        "type": "radiogroup",
        "name": "tvu_ref",
        "title": "The level of referral of TVU exam result. ",
        "choices": [
          "Significant Abnormality, Referral",
          "Moderate Abnormality, Referral",
          "Slight Variation from Normal, No Referral",
          "Normal / Result Not Available, No Referral"
        ],
        "defaultValue": [
          "Slight Variation from Normal, No Referral"
        ]
      },
      {
        "type": "text",
        "name": "ovcyst_vol",
        "title": "The worst volume on any cyst found on either ovary. Values range from 0 to 5644.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 5644
          }
        ],
        "defaultValue": [
          0
        ]
      },
      {
        "type": "text",
        "name": "ovary_vol",
        "title": "The largest ovary volume of the left and right ovary. Values range from 0 to 977.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 977
          }
        ],
        "defaultValue": [
          2
        ]
      },
      {
        "type": "radiogroup",
        "name": "ovcyst_sum",
        "title": "The worst summary of any cyst found on the left ovary. The cyst's diamter, solid area, and cyst outline determine the summary of the cyst. ",
        "choices": [
          "Not visualized",
          "< 3cm, no solid area and smooth outline",
          "< 3cm, mixed solid area or irregular/papillary outline" ,
          "< 3cm, solid area",
          "3 -< 6cm, no solid area and smooth outline",
          "3 -< 6cm, mixed solid area or irregular/papillary outline",
          "3 -< 6cm, solid area" ,
          "6+ cm, no solid area and smooth outline",
          "6+ cm, mixed solid area or irregular/papillary outline",
          "6+ cm, solid area",
        ],
        "defaultValue": [
          "Not visualized"
        ]
      },
      {
        "type": "radiogroup",
        "name": "detl_p",
        "title": "Sonographically Dectectable Left Side? ",
        "choices": [
          "True",
          "False"
        ],
        "defaultValue": [
          "False"
        ]
      },
      {
        "type": "text",
        "name": "ovcyst_diam",
        "title": "The worst diameter on any cyst found on either ovary. Values range from 0 to 22.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 22
          }
        ],
        "defaultValue": [
          1
        ]
      },
      {
        "type": "text",
        "name": "ovary_volr",
        "title": "The right ovary volume. Values range from 0 to 977.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 977
          }
        ],
        "defaultValue": [
          2
        ]
      },
      {
        "type": "radiogroup",
        "name": "detr_p",
        "title": "Sonographically Dectectable Right Side? ",
        "choices": [
          "True",
          "False"
        ],
        "defaultValue": [
          "False"
        ]
      },
      {
        "type": "text",
        "name": "ovcyst_volr",
        "title": "The worst volume on any cyst found on the right ovary. Values range from 0 to 1176.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 1176
          }
        ],
        "defaultValue": [
          0
        ]
      },
      {
        "type": "text",
        "name": "ovary_diam",
        "title": "The largest ovary diameter of the left and right ovary (in cm). Values range from 0 to 14.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 13
          }
        ],
        "defaultValue": [
          1
        ]
      },
      {
        "type": "text",
        "name": "ovcyst_diamr",
        "title": "The worst diameter on any cyst found on the right ovary. Values range from 0 to 14.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 13
          }
        ],
        "defaultValue": [
          0
        ]
      },
      {
        "type": "text",
        "name": "bmi_curr",
        "title": "What is your BMI? Values range from 15 to 73.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 15,
            "maxValue": 73
          }
        ],
        "defaultValue": [
          26
        ]
      },
      {
        "type": "text",
        "name": "rantero_p",
        "title": "Ovary Size - Antereoposterior Right in mm. Values range from 0 to 131.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 131
          }
        ],
        "defaultValue": [
          12
        ]
      },
      {
        "type": "radiogroup",
        "name": "ovcyst_morph",
        "title": "The worst morphology of any cyst found on either ovary. The cyst's solid area and cyst outline determine the morphology of the cyst. ",
        "choices": [
          "Not visualized",
          "No solid area and outline smooth",
          "Mixed solid area or outline irregular or outline papillaries",
          "Solid area",
        ],
        "defaultValue": [
          "Not visualized"
        ]
      },
      {
        "type": "radiogroup",
        "name": "tvu_result",
        "title": "TVU Result.",
        "choices": [
          "Negative",
          "Abnormal, Suspicious",
          "Abnormal, Non-Suspicious",
          "Inadequate Screen",
          "Not Done, Expected",
          "Not Done, Not Expected"
        ],
        "defaultValue": [
          "Not Done, Not Expected"
        ]
      },
      {
        "type": "text",
        "name": "bmi_50",
        "title": "What was your BMI at Age 50? Values range from 15 to 66.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 15,
            "maxValue": 66
          }
        ],
        "defaultValue": [
          25
        ]
      },
      {
        "type": "text",
        "name": "weight_f",
        "title": "What is your weight (lbs)? Values range from 70 to 378.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 70,
            "maxValue": 378
          }
        ],
        "defaultValue": [
          158
        ]
      },
      {
        "type": "text",
        "name": "weight50_f",
        "title": "What was your weight (lbs) at age 50? Values range from 80 to 399.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 80,
            "maxValue": 399
          }
        ],
        "defaultValue": [
          147
        ]
      },
      {
        "type": "text",
        "name": "bmi_20",
        "title": "What was your BMI at Age 20? Values range from 15 to 60.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 15,
            "maxValue": 59
          }
        ],
        "defaultValue": [
          21
        ]
      },
      {
        "type": "text",
        "name": "ovary_voll",
        "title": "The left ovary volume. Values range from 0 to 470.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 470
          }
        ],
        "defaultValue": [
          1
        ]
      },
      {
        "type": "text",
        "name": "ovcyst_diaml",
        "title": "The worst diameter on any cyst found on the left ovary. Values range from 0 to 22.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 22
          }
        ],
        "defaultValue": [
          0
        ]
      },
      {
        "type": "text",
        "name": "ovcyst_voll",
        "title": "The left ovary volume. Values range from 0 to 5644.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 5644
          }
        ],
        "defaultValue": [
          0
        ]
      },
      {
        "type": "text",
        "name": "lantero_p",
        "title": "Ovary Size - Antereoposterior Left Side in mm. Values range from 0 to 90.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 90
          }
        ],
        "defaultValue": [
          11
        ]
      },
      {
        "type": "text",
        "name": "weight20_f",
        "title": "What was your weight (lbs) at age 20? Values range from 74 to 399.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 74,
            "maxValue": 399
          }
        ],
        "defaultValue": [
          124
        ]
      },
      {
        "type": "text",
        "name": "volum",
        "title": "Volume of Cyst. Values range from 0 to 5000.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 5000
          }
        ],
        "defaultValue": [
          8
        ]
      },
      {
        "type": "radiogroup",
        "name": "visl",
        "title": "Was the left ovary sonographically detectable? ",
        "choices": [
          "True",
          "False"
        ],
        "defaultValue": [
          "False"
        ]
      },
      {
        "type": "text",
        "name": "ovary_diamr",
        "title": "The right ovary diameter. Values range from 0 to 14.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 13
          }
        ],
        "defaultValue": [
          1
        ]
      },
      {
        "type": "text",
        "name": "rlong_p",
        "title": "Ovary Size - Longitudinal Diameter Right Side. Values range from 0 to 137.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 137
          }
        ],
        "defaultValue": [
          16
        ]
      },
      {
        "type": "radiogroup",
        "name": "viseith",
        "title": "Sonographically Detectable Either Side? ",
        "choices": [
          "True",
          "False"
        ],
        "defaultValue": [
          "False"
        ]
      },
      {
        "type": "text",
        "name": "rtran_p",
        "title": "Ovary Size - Transverse Diameter Right Side in mm. Values range from 0 to 127.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 127
          }
        ],
        "defaultValue": [
          13
        ]
      },
      {
        "type": "text",
        "name": "maxdi",
        "title": "Maximum Diameter of abnormality in cm. Values range from 0 to 22.",
        "inputType": "number",
        "validators": [
          {
            "type": "numeric",
            "minValue": 0,
            "maxValue": 22
          }
        ],
        "defaultValue": [
          0
        ]
      }
      ]
  }],
  showQuestionNumbers: "off"
};