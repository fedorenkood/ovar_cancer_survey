# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.test import BaseTestCase


class TestPredictionController(BaseTestCase):
    """PredictionController integration test stubs"""

    def test_api1_year_prediction_post(self):
        """Test case for api1_year_prediction_post

        Get 1-Year Prediction
        """
        body = None
        response = self.client.open(
            '/api/1_year_prediction',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
