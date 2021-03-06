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

import { BasePathStart } from './base_path';
import { ChromeStart } from './chrome';
import { FatalErrorsStart } from './fatal_errors';
import { HttpStart } from './http';
import { I18nStart } from './i18n';
import { InjectedMetadataStart } from './injected_metadata';
import { NotificationsStart } from './notifications';
import { UiSettingsClient } from './ui_settings';

export { CoreSystem } from './core_system';

export interface CoreStart {
  i18n: I18nStart;
  injectedMetadata: InjectedMetadataStart;
  fatalErrors: FatalErrorsStart;
  notifications: NotificationsStart;
  http: HttpStart;
  basePath: BasePathStart;
  uiSettings: UiSettingsClient;
  chrome: ChromeStart;
}
