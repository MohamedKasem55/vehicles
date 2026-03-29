import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/components/atoms/input/input'
import Select from '@/components/atoms/input/select'
import SaveIcon from '@/components/atoms/icons/SaveIcon'
import Button from '@/components/atoms/button'

interface ITransportCitiesForm {
  fromCity: string
  toCity: string
  duration: string
}

const durationOptions: React.OptionHTMLAttributes<HTMLOptionElement>[] = [
  { value: '1', label: 'سنة واحدة' },
  { value: '2', label: 'سنتان' },
  { value: '3', label: '3 سنوات' },
  { value: '5', label: '5 سنوات' },
  { value: '10', label: '10 سنوات' },
]

function TransportCitiesForm() {
  const { register, handleSubmit } = useForm<ITransportCitiesForm>({
    defaultValues: { fromCity: '', toCity: '', duration: '1' },
  })

  const onSubmit = (data: ITransportCitiesForm) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 flex flex-col gap-6"
      dir="rtl"
    >
      <div className="flex flex-row gap-4">
        <Input label="من مدينة" registration={register('fromCity')} />
        <Input label="إلى مدينة" registration={register('toCity')} />
        <Select label="مدة التبعية" registration={register('duration')} options={durationOptions} />
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          variant="primary"
          label="حفظ"
          icon={<SaveIcon width={20} height={20} />}
          iconPosition="right"
        />
      </div>
    </form>
  )
}

export default TransportCitiesForm
