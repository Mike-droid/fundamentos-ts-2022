import { subDays, format } from 'date-fns';

const date = new Date(1998, 9, 22) //* October 22, 1998
const rta = subDays(date.getTime(), 30)
const formatted = format(rta, 'dd MMMM yyyy')

console.log(formatted) //* 22 September 1998
