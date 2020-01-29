/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { EuiTabs, EuiTab } from '@elastic/eui';

import { FormattedMessage } from '@kbn/i18n/react';

function handleClick(activateTab, tabName) {
  activateTab(tabName);
}

export function TimelionHelpTabs(props) {
  return (
    <EuiTabs size="s">
      <EuiTab
        isSelected={props.activeTab === 'funcref'}
        onClick={() => handleClick(props.activateTab, 'funcref')}
      >
        <FormattedMessage
          id="timelion.help.mainPage.functionReferenceTitle"
          defaultMessage="Function reference"
        />
      </EuiTab>
      <EuiTab
        isSelected={props.activeTab === 'keyboardtips'}
        onClick={() => handleClick(props.activateTab, 'keyboardtips')}
      >
        <FormattedMessage
          id="timelion.help.mainPage.keyboardTipsTitle"
          defaultMessage="Keyboard tips"
        />
      </EuiTab>
    </EuiTabs>
  );
}

TimelionHelpTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  activateTab: PropTypes.func.isRequired,
};