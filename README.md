# Test of LWC RefreshApi

codeLive: How To Synchronize Component Data in LWC Using the RefreshView API

This repo contains a super simple lwc "refreshMonitor" that uses the lwc refreshapi to register a refresh handler.
"refreshMonitor" lwc is placed on Account record page.

When handler fires the lwc console logs "refreshHandler".
Idea was to test when a refreshHandler gets fired

Observation
1) when Account record detail gets updated -> refreshHandler fires
2) when record in standard related list on Account record page gets updated (e.g. use Edit button on Opportunity related list) -> refreshHandler does not fire

Question
- is this working as expected?
- is this a bug?

How to test..
- push to scratch org
- create Account record
- create related Opportunity record
- on Account record page
1) edit any field on Account detail
2) on Opportunity related list click Edit button on related Opportunity record, make change and save
