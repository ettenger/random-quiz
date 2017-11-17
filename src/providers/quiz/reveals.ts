import { Result } from './result';

export const REVEALS: {[key: string]: Result[]} = {
  'which Jonas Brother you should marry': [
    {
      name: 'Nick',
      description: 'Either you\'re young or young at heart because Nick is the Jonas for you.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Nick_Jonas_2009.jpg'
    },
    {
      name: 'Joe',
      description: 'You don\'t need to keep hopin\'. You\'re ready to settle down to some cake by the ocean',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/JoeJonasSep10_3.jpg'
    },
    {
      name: 'Kevin',
      description: 'Kevin is already married, so this could be complicated. But we think it\'s worth a shot!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kevin_Jonas_2009.jpg'
    }
  ],
  'what kind of pants you are wearing': [
    {
      name: 'Jeans',
      description: 'The Old Faithful of the pants world, these denim pantaloons will keep you covered through thick and thin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg'
    },
    {
      name: 'Shorts',
      description: 'Keepin\' it cool!',
      image: 'https://static.pexels.com/photos/5994/man-shorts-people-trunk.jpg'
    },
    {
      name: 'Jorts',
      description: 'Mabye you didn\'t get the memo or maybe you just love frisbee. Either way, we salute your jorts!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Young_man_wearing_jorts_%28denim_shorts%29_%28cropped%29.jpg'
    },
    {
      name: 'Pajamas',
      description: 'You\'re not dressed for going out and we can\'t blame you. Just stay warm and fuzzy in bed.',
      image: 'https://www.lrngo.com/englishimages/Couch-Potato.jpg'
    },
    {
      name: 'No pants',
      description: 'We don\'t know what you\'re up to, but keep it to yourself.',
      image: 'https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/c9zztwuhm1nzrgnnqo1r.jpg'
    }
  ],
  'how many pairs of underpants you own': [
    {
      name: 'More than ten',
      description: 'That\'s a good number of underpants. We\'re happy for you',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Boxer_002.jpg'
    }
  ]
}
