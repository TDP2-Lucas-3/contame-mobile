#!/usr/bin/env bash

TOKEN="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsbGF2YW5kZWlyYUBmaS51YmEuYXIiLCJpYXQiOjE2MDM2NDY2MDAsImV4cCI6MTYwMzczMzAwMH0.l6soKfkqbv8sjSTeEA1U3E8rOtBTduYe5IH1tf2DASUTAPCHtARgjQMzTQaGjdkS0xlu3RixerW1ZZ9hbc22BA"

curl https://contame-dev.herokuapp.com/contame/incident/categories -H "Authorization: Bearer ${TOKEN}"
