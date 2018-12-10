const bootstrap = [
  [
    {
      title: 'table-inverse-color',
      name: 'table-inverse-color',
      hex: '#fff',
      default: true,
    },
    {
      title: 'gray',
      name: 'gray',
      hex: '#464a4c',
      default: true,
    },
    {
      title: 'gray-light',
      name: 'gray-light',
      hex: '#636c72',
      default: true,
    },
    {
      title: 'gray-lighter',
      name: 'gray-lighter',
      hex: '#eceeef',
      default: true,
    },
    {
      title: 'gray-lightest',
      name: 'gray-lightest',
      hex: '#f7f7f9',
      default: true,
    },
    {
      title: 'gray-dark',
      name: 'gray-dark',
      hex: '#292b2c',
      default: true,
    },
  ],
];

const primary = [
  [
    { title: 'BLEU AXA', name: 'color-axa', hex: '#00008f', default: true },
    {
      title: 'BLEU Action (lien, bouton etc...)',
      name: 'color-azur',
      hex: '#3032c1',
      default: true,
    },
    {
      title: 'BLEU Action inactif (tabs, carte, formule etc...)',
      name: 'color-action-1',
      hex: '#70709a',
      default: true,
    },
    { title: 'BLEU 4', name: 'color-action-2', hex: '#d3d3e7', default: true },
  ],
  [
    { title: 'GRIS Texte', name: 'color-texte', hex: '#333', default: true },
    { title: 'GRIS 1', name: 'color-gray-1', hex: '#ccc', default: true },
    { title: 'GRIS 2', name: 'color-gray-2', hex: '#e5e5e5', default: true },
    { title: 'GRIS 3', name: 'color-gray-3', hex: '#f5f5f5', default: true },
    { title: 'BLANC', name: 'color-white', hex: '#fff', default: true },
  ],
  [
    {
      title: 'ROUGE Erreur',
      name: 'color-red-error',
      hex: '#f02849',
      default: true,
    },
  ],
];

const secondary = [
  [
    { title: 'ROUGE 1', name: 'color-red-1', hex: '#a70d26', default: true },
    { title: 'ROUGE 2', name: 'color-red-2', hex: '#e992a1', default: true },
    { title: 'ROUGE 3', name: 'color-red-3', hex: '#f9bcc6', default: true },
    { title: 'ROUGE 4', name: 'color-red-4', hex: '#debbc1', default: true },
  ],
  [
    {
      title: 'ORANGE 1',
      name: 'color-flamingo',
      hex: '#ec4d33',
      default: true,
    },
    {
      title: 'ORANGE 2',
      name: 'color-burnt-sienna',
      hex: '#f07662',
      default: true,
    },
  ],
  [
    { title: 'VERT 1', name: 'color-green-1', hex: '#1cc578', default: true },
    { title: 'VERT 2', name: 'color-green-2', hex: '#10a992', default: true },
    { title: 'VERT 3', name: 'color-green-3', hex: '#3db899', default: true },
    { title: 'VERT 4', name: 'color-green-4', hex: '#18a854', default: true },
    { title: 'VERT 5', name: 'color-green-5', hex: '#bdeccb', default: true },
    { title: 'VERT 6', name: 'color-green-6', hex: '#a4cdb1', default: true },
  ],
  [
    { title: 'BLEU 1', name: 'color-blue-1', hex: '#49bdca', default: true },
    { title: 'BLEU 2', name: 'color-blue-2', hex: '#3fa7b3', default: true },
  ],
  [
    { title: 'MAUVE 1', name: 'color-mauve-1', hex: '#4972ca', default: true },
    { title: 'MAUVE 2', name: 'color-mauve-2', hex: '#375db0', default: true },
  ],
  [
    { title: 'JAUNE 1', name: 'color-yellow-1', hex: '#c78e13', default: true },
    { title: 'JAUNE 2', name: 'color-yellow-2', hex: '#f1d596', default: true },
    { title: 'JAUNE 3', name: 'color-yellow-3', hex: '#c8b282', default: true },
  ],
];

const theme = [
  [
    { title: 'AUTO', name: 'color-auto', hex: '#a70d26', default: true },
    {
      title: 'HABITATION',
      name: 'color-habitation',
      hex: '#ec4d33',
      default: true,
    },
    { title: 'SANTE', name: 'color-sante', hex: '#1cc578', default: true },
    {
      title: 'COLLECTIVE',
      name: 'color-collective',
      hex: '#49bdca',
      default: true,
    },
    { title: 'LOISIRS', name: 'color-loisirs', hex: '#00af8f', default: true },
    { title: 'BANQUE', name: 'color-banque', hex: '#51aad3', default: true },
    { title: 'ÉPARGNE', name: 'color-epargne', hex: '#6377ba', default: true },
    {
      title: 'ENTREPRISE',
      name: 'color-entreprise',
      hex: '#5e3778',
      default: true,
    },
    { title: 'IARD', name: 'color-iard', hex: '#42145f', default: true },
    {
      title: 'PATRIMONIAL',
      name: 'color-patrimonial',
      hex: '#c5a57f',
      default: true,
    },
    { title: 'PROS', name: 'color-pros', hex: '#738b9c', default: true },
    {
      title: 'ASSURBANQUE',
      name: 'color-assurbanque',
      hex: '#ff1821',
      default: true,
    },
  ],
];

const components = [
  [
    {
      title: 'ALERT SUCCESS',
      name: 'color-alertSucces-leftBgColor',
      hex: '#38a758',
      default: true,
    },
    {
      title: 'ALERT SUCCESS',
      name: 'color-alertSucces-bgColor',
      hex: '#bdeccb',
      default: true,
    },
    {
      title: 'ALERT SUCCESS',
      name: 'color-alertSucces-colorBorder',
      hex: '#a1cbae',
      default: true,
    },
    {
      title: 'ALERT SUCCESS',
      name: 'color-alertSucces-textColor',
      hex: '#146a2d',
      default: true,
    },
  ],
  [
    {
      title: 'ALERT INFO',
      name: 'color-alertInfo-leftBgColor',
      hex: '#0b99bf',
      default: true,
    },
    { title: 'ALERT INFO', name: 'color-alertInfo-bgColor', hex: '#97d3e3' },
    {
      title: 'ALERT INFO',
      name: 'color-alertInfo-colorBorder',
      hex: '#78b2c1',
      default: true,
    },
    {
      title: 'ALERT INFO',
      name: 'color-alertInfo-textColor',
      hex: '#1b6a7f',
      default: true,
    },
  ],
  [
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-leftBgColor',
      hex: '#c78e13',
      default: true,
    },
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-bgColor',
      hex: '#f1d596',
      default: true,
    },
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-colorBorder',
      hex: '#c8b282',
      default: true,
    },
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-textColor',
      hex: '#805b0a',
      default: true,
    },
  ],
  [
    {
      title: 'ALERT ERROR',
      name: 'color-alertError-leftBgColor',
      hex: '#a70d26',
      default: true,
    },
    { title: 'ALERT ERROR', name: 'color-alertError-bgColor', hex: '#ffd5dc' },
    {
      title: 'ALERT ERROR',
      name: 'color-alertError-colorBorder',
      hex: '#debbc1',
      default: true,
    },
    {
      title: 'ALERT ERROR',
      name: 'color-alertError-textColor',
      hex: '#a02237',
      default: true,
    },
  ],
  [
    {
      title: 'BOUTON',
      name: 'color-btn-success',
      hex: '#1cc578',
      default: true,
    },
    {
      title: 'BOUTON',
      name: 'color-btn-success-dark',
      hex: '#0d844e',
      default: true,
    },
    {
      title: 'BOUTON',
      name: 'color-btn-danger',
      hex: '#f02849',
      default: true,
    },
    {
      title: 'BOUTON',
      name: 'color-btn-danger-dark',
      hex: '#8f182c',
      default: true,
    },
    {
      title: 'BOUTON',
      name: 'color-btn-disabled',
      hex: '#c9c9c9',
      default: true,
    },
  ],
  [
    { title: 'CARD', name: 'card-white', hex: '#fff', default: true },
    { title: 'CARD', name: 'card-grey-light', hex: '#f5f5f5', default: true },
    { title: 'CARD', name: 'card-border-grey', hex: '#dbdbdb', default: true },
    { title: 'CARD', name: 'card-blue-active', hex: '#3032c1', default: true },
    { title: 'CARD', name: 'card-header', hex: '#ccc', default: true },
    { title: 'CARD', name: 'card-text-color', hex: '#4d4d4d', default: true },
    { title: 'CARD', name: 'card-bg-disabled', hex: '#e5e5e5', default: true },
  ],
  [
    {
      title: 'TABLE',
      name: 'color-table-sorting',
      hex: '#20a892',
      default: true,
    },
  ],
  [{ title: 'LIEN', name: 'color-pager-link', hex: '#4d4d4d', default: true }],
  [
    {
      title: 'ACCORDEON',
      name: 'color-accordion-custom',
      hex: '#49bdca',
      default: true,
    },
    {
      title: 'ACCORDEON',
      name: 'color-accordeon-border-collapse',
      hex: '#eee',
      default: true,
    },
  ],
  [
    { title: 'TABS', name: 'color-tabs-item', hex: '#ccc', default: true },
    { title: 'TABS', name: 'color-tabs-link', hex: '#6e6e6e', default: true },
    {
      title: 'TABS',
      name: 'color-tabs-content',
      hex: '#c0c0c0',
      default: true,
    },
    { title: 'TABS', name: 'color-tabs-disabled', hex: '#ccc', default: true },
    {
      title: 'TABS',
      name: 'color-tabs-disabled-button',
      hex: '#333',
      default: true,
    },
  ],
  [
    {
      title: 'FILTER',
      name: 'color-filter-selected-background',
      hex: '#ccc',
      default: true,
    },
    {
      title: 'FILTER',
      name: 'color-filter-selected-text',
      hex: '#333',
      default: true,
    },
    {
      title: 'FILTER',
      name: 'color-filter-selected-glyphicon-close',
      hex: '#696868',
      default: true,
    },
  ],
  [
    { title: 'FORM', name: 'error-custom-bg', hex: '#ffbfbf', default: true },
    {
      title: 'FORM',
      name: 'error-custom-border',
      hex: '#d18e8e',
      default: true,
    },
  ],
  [
    {
      title: 'RESTITUTION',
      name: 'border-bottom-header',
      hex: '#979797',
      default: true,
    },
    {
      title: 'RESTITUTION',
      name: 'brand-primary',
      hex: '#00008f',
      default: true,
    },
    {
      title: 'RESTITUTION',
      name: 'color-highlightpink',
      hex: '#d52861',
      default: true,
    },
  ],
];

const others = [
  [
    { title: 'COLOR', name: 'color-red-axa', hex: '#ff1721', default: true },
    {
      title: 'COLOR',
      name: 'color-gray-contract',
      hex: '#c4c4c4',
      default: true,
    },
    {
      title: 'COLOR',
      name: 'color-deep-sapphire',
      hex: '#00005b',
      default: true,
    },
    { title: 'COLOR', name: 'color-st-tropaz', hex: '#2425aa', default: true },
    {
      title: 'COLOR',
      name: 'color-dark-indigo',
      hex: '#3b3fd8',
      default: true,
    },
    {
      title: 'COLOR',
      name: 'color-blue-lighter',
      hex: '#494df4',
      default: true,
    },
    { title: 'COLOR', name: 'color-blue-alert', hex: '#30b8dc', default: true },
    {
      title: 'COLOR',
      name: 'color-blue-alert-dark',
      hex: '#218eab',
      default: true,
    },
    { title: 'COLOR', name: 'color-pink', hex: '#fe3951', default: true },
    { title: 'COLOR', name: 'color-pink-dark', hex: '#c0203a', default: true },
    { title: 'COLOR', name: 'color-orange', hex: '#f1b531', default: true },
    {
      title: 'COLOR',
      name: 'color-orange-dark',
      hex: '#c5901b',
      default: true,
    },
    { title: 'COLOR', name: 'color-mine-shaft', hex: '#333', default: true },
    { title: 'COLOR', name: 'color-scorpion', hex: '#333', default: true },
    { title: 'COLOR', name: 'color-gray', hex: '#7f7f7f', default: true },
    { title: 'COLOR', name: 'color-dusty-gray', hex: '#999', default: true },
    { title: 'COLOR', name: 'color-silver', hex: '#ccc', default: true },
    { title: 'COLOR', name: 'color-mercury', hex: '#e5e5e5', default: true },
    { title: 'COLOR', name: 'color-wild-sand', hex: '#f5f5f5', default: true },
    { title: 'COLOR', name: 'color-alabaster', hex: '#fafafa', default: true },
    { title: 'COLOR', name: 'color-malachite', hex: '#1cc54e', default: true },
    {
      title: 'COLOR',
      name: 'color-malachite-light',
      hex: '#3db899',
      default: true,
    },
    {
      title: 'COLOR',
      name: 'color-malachite-dark',
      hex: '#2b8c47',
      default: true,
    },
  ],
];

const colors = [];
colors.bootstrap = bootstrap;
colors.primary = primary;
colors.secondary = secondary;
colors.theme = theme;
colors.components = components;
colors.others = others;

module.exports = colors;
