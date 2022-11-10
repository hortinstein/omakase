import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCallBackById, UpdateCallBackInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormCallBack = NonNullable<EditCallBackById['callBack']>

interface CallBackFormProps {
  callBack?: EditCallBackById['callBack']
  onSave: (data: UpdateCallBackInput, id?: FormCallBack['id']) => void
  error: RWGqlError
  loading: boolean
}

const CallBackForm = (props: CallBackFormProps) => {
  const onSubmit = (data: FormCallBack) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.callBack?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCallBack> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="buildid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Buildid
        </Label>
        
          <TextField
            name="buildid"
            defaultValue={props.callBack?.buildid}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="buildid" className="rw-field-error" />

        <Label
          name="deploymentid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deploymentid
        </Label>
        
          <TextField
            name="deploymentid"
            defaultValue={props.callBack?.deploymentid}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="deploymentid" className="rw-field-error" />

        <Label
          name="machineID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Machine id
        </Label>
        
          <TextField
            name="machineID"
            defaultValue={props.callBack?.machineID}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="machineID" className="rw-field-error" />

        <Label
          name="publicIP"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Public ip
        </Label>
        
          <NumberField
            name="publicIP"
            defaultValue={props.callBack?.publicIP}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="publicIP" className="rw-field-error" />

        <Label
          name="privateIP"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Private ip
        </Label>
        
          <NumberField
            name="privateIP"
            defaultValue={props.callBack?.privateIP}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="privateIP" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CallBackForm
