import moment from 'moment';

export const timeLeftFromNow = (isoDate) => {
    const momentDate = moment(isoDate);
    return momentDate.fromNow();
};
