import lucky from '../assests/img/cat-lucky.jpg';
import basilio from '../assests/img/cat-basilio.jpg';
import siu from '../assests/img/cat-siu.jpg';

export const catsList = [
  {
    id: 0,
    name: 'Кот Лаки',
    about: 'Крайне спокойный, ласковый малыш, который медленно, но\u00A0уверенно перестаёт быть робким скромнягой.',
    image: lucky,
    feature: 'new',
  },
  {
    id: 1,
    name: 'Кот Базилио',
    about: `Прошлые хозяева отказались от\u00A0него, и\u00A0долгое время ему пришлось быть на\u00A0передержке, привыкая к&nbsp;новой жизни.`,
    image: basilio,
    feature: 'empty',
  },
  {
    id: 3,
    name: 'Кошка Сью',
    about: 'Эта юная красавица очень общительная и\u00A0ласковая уже с\u00A0первого дня, как приехала в\u00A0кафе.',
    image: siu,
    feature: 'soft',
  },
];
