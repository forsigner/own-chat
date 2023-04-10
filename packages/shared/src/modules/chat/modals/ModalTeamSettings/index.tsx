import { Box } from '@fower/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  MenuItem,
  ModalCloseButton,
  Alert,
} from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { General } from './General'
import { useState } from 'react'
import { CurrentTeam } from '../../Sidebar/CurrentTeam'
import { Plan } from './Plan'
import { Members } from './Members'

enum SettingType {
  General,
  Members,
  Billing,
}

export const ModalTeamSettings = () => {
  const { register } = useModal()
  const [type, setType] = useState<SettingType>(SettingType.General)

  const menuData: Array<{ label: string; value: SettingType }> = [
    {
      label: 'General',
      value: SettingType.General,
    },
    {
      label: 'Members',
      value: SettingType.Members,
    },
    // {
    //   label: 'Billing',
    //   value: SettingType.Billing,
    // },
  ]

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent minW-960--i minH-90vh maxH-90vh>
        <ModalCloseButton />
        <ModalBody>
          <Box toLeft columnGap-40>
            <Box w-200 py4>
              <CurrentTeam showSettingIcon={false} mb4 />
              <Box spaceY2>
                {menuData.map((item) => (
                  <MenuItem
                    key={item.value}
                    selected={item.value === type}
                    roundedLG
                    onClick={() => setType(item.value)}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box flex-1 py6>
              {type === SettingType.General && <General />}
              {type === SettingType.Members && <Members />}
              {type === SettingType.Billing && <Plan />}
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
