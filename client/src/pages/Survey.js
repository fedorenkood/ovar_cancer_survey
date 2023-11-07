import React, { useState, useEffect } from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import axios from "axios";


import { json } from "../data/survey_json.js";

StylesManager.applyTheme("defaultV2");

function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

export function SurveyPage() {
  const model = new Model(json);

  const [fraction, setFraction] = useState(null);
  const [probability, setProbability] = useState(null);
  const [showSurvey, setShowSurvey] = useState(true);


  function onComplete(survey) {
    console.log("Survey complete! Results: " + JSON.stringify(survey.data));
    const config = {
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header to application/json
      },
    };

    const endpoint = '/api/1_year_prediction'; 
    axios.post(endpoint, JSON.stringify(survey.data), config)
    .then((res) => {
      if (res.status == 200) {
        let frac = res.data["fraction"] * 100;
        let prob = res.data["probability"];

        setProbability(prob);
        setFraction(frac);
        setShowSurvey(false);
      } else {
        
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }


  return (
    <div className="container">
      <h1>Ovarian Cancer Survey</h1>
      <h5>This survey can be used to predict whether a person will develop cancer within 1 year of screening.</h5>
      {showSurvey && <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />}
      <div>
        {(!showSurvey) ? (
          <div>
            <h3>Score returned by the model: {probability.toFixed(4)}</h3>
            <h3>Percentage of people with similar score who developed cancer within 1 year: {fraction.toFixed(3)}%</h3>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
