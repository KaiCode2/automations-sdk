import { ClientParams } from './types'
import { Automation } from './Automation'

export {
  ALLOWED_VALIDATORS,
  AUTOMATIONS_BASE_URL,
  TIME_BASED_TRIGGER_URL,
  EVENT_BASED_TRIGGER_URL,
  AUTOMATIONS_OWNER,
} from './constants'

export {
  Validator,
  ClientParams,
  Action,
  TimeBasedTrigger,
  EventBasedTrigger,
  CreateTimeBasedTriggerParams,
  CreateEventBasedTriggerParams,
  Automation,
  SignAutomationParams,
  AutomationResponse,
} from './types'

export function createAutomationClient(params: ClientParams): Automation {
  return new Automation(params)
}
