/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { PluginInitializerContext } from 'src/core/server';
import { config, InfraConfig, InfraServerPlugin, InfraPluginSetup } from './plugin';
import { savedObjectMappings } from './saved_objects';

export { config, InfraConfig, savedObjectMappings, InfraPluginSetup };

export function plugin(context: PluginInitializerContext) {
  return new InfraServerPlugin(context);
}
