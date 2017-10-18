import { Meteor } from 'meteor/meteor';
import NodeSimpleSchema from 'simpl-schema';

import './ssm-defaults.js';

NodeSimpleSchema.debug = Meteor.isDevelopment;
NodeSimpleSchema.extendOptions(['autoform']);

export const SimpleSchema = NodeSimpleSchema;