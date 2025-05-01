import { format } from 'date-fns';
import {
  Breadcrumbs,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import {
  HeightOfContainerMap,
  SignOfCargoDangerMap,
  TypeOfOperationMap,
} from './utils/mappings';

type Props = {
  dateOfTransportation: string;
  typeOfOperation: 'load' | 'unload';
  typeOfContainer: string;
  heightOfContainer: 'standart' | 'high';
  weightOfCargo: string;
  signOfCargoDanger: 'dangerous' | 'notDangerous';
  warehouseCity: string;
  containerReceivingCity: string;
  containerDeliveryCity: string;
  user: {
    email: string;
  };
};

export const Order = ({
  dateOfTransportation,
  typeOfOperation,
  typeOfContainer,
  heightOfContainer,
  weightOfCargo,
  signOfCargoDanger,
  warehouseCity,
  containerReceivingCity,
  containerDeliveryCity,
  user: { email },
}: Props) => {
  return (
    <Paper elevation={2} sx={{ padding: '8px' }}>
      <Stack direction="row" spacing={2}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Дата перевозки:
        </Typography>
        <Typography variant="body1">
          {format(dateOfTransportation, 'dd.MM.yyyy')}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Тип операции:
        </Typography>
        <Chip label={TypeOfOperationMap[typeOfOperation]} size="small" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Контейнер:
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={`${typeOfContainer} ft`} size="small" />
          <Chip
            label={HeightOfContainerMap[heightOfContainer]}
            size="small"
            color={heightOfContainer === 'high' ? 'warning' : 'default'}
          />
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Груз:
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={`${weightOfCargo} кг`} size="small" />
          <Chip
            label={SignOfCargoDangerMap[signOfCargoDanger]}
            size="small"
            color={signOfCargoDanger === 'dangerous' ? 'error' : 'default'}
          />
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Город:
          </Typography>
          <Typography variant="body2">получения / склада / сдачи</Typography>
        </Stack>

        <Breadcrumbs>
          <Typography variant="body2">{containerReceivingCity}</Typography>
          <Typography variant="body2">{warehouseCity}</Typography>
          <Typography variant="body2">{containerDeliveryCity}</Typography>
        </Breadcrumbs>
      </Stack>
      <Divider sx={{ marginTop: '4px', marginBottom: '4px' }} />
      <Stack direction="row" spacing={2}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Контакт:
        </Typography>
        <Typography variant="body1">{email}</Typography>
      </Stack>
    </Paper>
  );
};
