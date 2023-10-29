import React, { useState, useEffect } from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";


import { json } from "../data/survey_json.js";

StylesManager.applyTheme("defaultV2");

function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

export function SurveyPage() {
  const model = new Model(json);

  const [apiResponse, setApiResponse] = useState(null);



  function onComplete(survey) {
    console.log("Survey complete! Results: " + JSON.stringify(survey.data));
    // Define the API endpoint and request options
    const apiUrl = 'http://127.0.0.1:8080/api/1_year_prediction'; // Replace with your API URL
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(survey.data), // Convert the object to JSON
    };
  
    // Make the API request
    fetch(apiUrl, requestOptions)
      .then((response) => response.json()) // Parse the response as JSON
      .then((result) => {
        setApiResponse(result);
        // You can handle the API response data here
        console.log(result);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }


  return (
    <div className="container">
      <h1>SurveyJS Library / Runner</h1>
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
      <div>
        {apiResponse ? (
          <div>
            <h1>API Response:</h1>
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
