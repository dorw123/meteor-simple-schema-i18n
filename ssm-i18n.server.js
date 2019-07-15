import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import './ssm-defaults.js';

NodeSimpleSchema.debug = Meteor.isDevelopment;
NodeSimpleSchema.extendOptions(['autoform', 'denyUpdate', 'denyInsert']);

export const SimpleSchemaI18n = SimpleSchema;