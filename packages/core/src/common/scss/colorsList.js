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
    },
    {
      title: 'BLEU Action inactif (tabs, carte, formule etc...)',
      name: 'color-action-1',
      hex: '#70709a',
    },
    { title: 'BLEU 4', name: 'color-action-2', hex: '#d3d3e7' },
  ],
  [
    { title: 'GRIS Texte', name: 'color-texte', hex: '#333' },
    { title: 'GRIS 1', name: 'color-gray-1', hex: '#ccc' },
    { title: 'GRIS 2', name: 'color-gray-2', hex: '#e5e5e5' },
    { title: 'GRIS 3', name: 'color-gray-3', hex: '#f5f5f5' },
    { title: 'BLANC', name: 'color-white', hex: '#fff' },
  ],
  [{ title: 'ROUGE Erreur', name: 'color-red-error', hex: '#f02849' }],
];

const secondary = [
  [
    { title: 'ROUGE 1', name: 'color-red-1', hex: '#a70d26' },
    { title: 'ROUGE 2', name: 'color-red-2', hex: '#e992a1' },
    { title: 'ROUGE 3', name: 'color-red-3', hex: '#f9bcc6' },
    { title: 'ROUGE 4', name: 'color-red-4', hex: '#debbc1' },
  ],
  [
    { title: 'ORANGE 1', name: 'color-flamingo', hex: '#ec4d33' },
    { title: 'ORANGE 2', name: 'color-burnt-sienna', hex: '#f07662' },
  ],
  [
    { title: 'VERT 1', name: 'color-green-1', hex: '#1cc578' },
    { title: 'VERT 2', name: 'color-green-2', hex: '#10a992' },
    { title: 'VERT 3', name: 'color-green-3', hex: '#3db899' },
    { title: 'VERT 4', name: 'color-green-4', hex: '#18a854' },
    { title: 'VERT 5', name: 'color-green-5', hex: '#bdeccb' },
    { title: 'VERT 6', name: 'color-green-6', hex: '#a4cdb1' },
  ],
  [
    { title: 'BLEU 1', name: 'color-blue-1', hex: '#49bdca' },
    { title: 'BLEU 2', name: 'color-blue-2', hex: '#3fa7b3' },
  ],
  [
    { title: 'MAUVE 1', name: 'color-mauve-1', hex: '#4972ca' },
    { title: 'MAUVE 2', name: 'color-mauve-2', hex: '#375db0' },
  ],
  [
    { title: 'JAUNE 1', name: 'color-yellow-1', hex: '#c78e13' },
    { title: 'JAUNE 2', name: 'color-yellow-2', hex: '#f1d596' },
    { title: 'JAUNE 3', name: 'color-yellow-3', hex: '#c8b282' },
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
    },
    {
      title: 'ALERT SUCCESS',
      name: 'color-alertSucces-bgColor',
      hex: '#bdeccb',
    },
    {
      title: 'ALERT SUCCESS',
      name: 'color-alertSucces-colorBorder',
      hex: '#a1cbae',
    },
    {
      title: 'ALERT SUCCESS',
      name: 'color-alertSucces-textColor',
      hex: '#146a2d',
    },
  ],
  [
    {
      title: 'ALERT INFO',
      name: 'color-alertInfo-leftBgColor',
      hex: '#0b99bf',
    },
    { title: 'ALERT INFO', name: 'color-alertInfo-bgColor', hex: '#97d3e3' },
    {
      title: 'ALERT INFO',
      name: 'color-alertInfo-colorBorder',
      hex: '#78b2c1',
    },
    { title: 'ALERT INFO', name: 'color-alertInfo-textColor', hex: '#1b6a7f' },
  ],
  [
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-leftBgColor',
      hex: '#c78e13',
    },
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-bgColor',
      hex: '#f1d596',
    },
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-colorBorder',
      hex: '#c8b282',
    },
    {
      title: 'ALERT DANGER',
      name: 'color-alertDanger-textColor',
      hex: '#805b0a',
    },
  ],
  [
    {
      title: 'ALERT ERROR',
      name: 'color-alertError-leftBgColor',
      hex: '#a70d26',
    },
    { title: 'ALERT ERROR', name: 'color-alertError-bgColor', hex: '#ffd5dc' },
    {
      title: 'ALERT ERROR',
      name: 'color-alertError-colorBorder',
      hex: '#debbc1',
    },
    {
      title: 'ALERT ERROR',
      name: 'color-alertError-textColor',
      hex: '#a02237',
    },
  ],
  [
    { title: 'BOUTON', name: 'color-btn-success', hex: '#1cc578' },
    { title: 'BOUTON', name: 'color-btn-success-dark', hex: '#0d844e' },
    { title: 'BOUTON', name: 'color-btn-danger', hex: '#f02849' },
    { title: 'BOUTON', name: 'color-btn-danger-dark', hex: '#8f182c' },
    { title: 'BOUTON', name: 'color-btn-disabled', hex: '#c9c9c9' },
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
  [{ title: 'TABLE', name: 'color-table-sorting', hex: '#20a892' }],
  [{ title: 'LIEN', name: 'color-pager-link', hex: '#4d4d4d' }],
  [
    { title: 'ACCORDEON', name: 'color-accordion-custom', hex: '#49bdca' },
    {
      title: 'ACCORDEON',
      name: 'color-accordeon-border-collapse',
      hex: '#eee',
    },
  ],
  [
    { title: 'TABS', name: 'color-tabs-item', hex: '#ccc' },
    { title: 'TABS', name: 'color-tabs-link', hex: '#6e6e6e' },
    { title: 'TABS', name: 'color-tabs-content', hex: '#c0c0c0' },
    { title: 'TABS', name: 'color-tabs-disabled', hex: '#ccc' },
    { title: 'TABS', name: 'color-tabs-disabled-button', hex: '#333' },
  ],
  [
    { title: 'FILTER', name: 'color-filter-selected-background', hex: '#ccc' },
    { title: 'FILTER', name: 'color-filter-selected-text', hex: '#333' },
    {
      title: 'FILTER',
      name: 'color-filter-selected-glyphicon-close',
      hex: '#696868',
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
    { title: 'RESTITUTION', name: 'border-bottom-header', hex: '#979797' },
    {
      title: 'RESTITUTION',
      name: 'brand-primary',
      hex: '#00008f',
      default: true,
    },
    { title: 'RESTITUTION', name: 'color-highlightpink', hex: '#d52861' },
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
    { title: 'COLOR', name: 'color-deep-sapphire', hex: '#00005b' },
    { title: 'COLOR', name: 'color-st-tropaz', hex: '#2425aa' },
    { title: 'COLOR', name: 'color-dark-indigo', hex: '#3b3fd8' },
    { title: 'COLOR', name: 'color-blue-lighter', hex: '#494df4' },
    { title: 'COLOR', name: 'color-blue-alert', hex: '#30b8dc' },
    { title: 'COLOR', name: 'color-blue-alert-dark', hex: '#218eab' },
    { title: 'COLOR', name: 'color-pink', hex: '#fe3951' },
    { title: 'COLOR', name: 'color-pink-dark', hex: '#c0203a' },
    { title: 'COLOR', name: 'color-orange', hex: '#f1b531' },
    { title: 'COLOR', name: 'color-orange-dark', hex: '#c5901b' },
    { title: 'COLOR', name: 'color-mine-shaft', hex: '#333' },
    { title: 'COLOR', name: 'color-scorpion', hex: '#333' },
    { title: 'COLOR', name: 'color-gray', hex: '#7f7f7f' },
    { title: 'COLOR', name: 'color-dusty-gray', hex: '#999' },
    { title: 'COLOR', name: 'color-silver', hex: '#ccc' },
    { title: 'COLOR', name: 'color-mercury', hex: '#e5e5e5' },
    { title: 'COLOR', name: 'color-wild-sand', hex: '#f5f5f5' },
    { title: 'COLOR', name: 'color-alabaster', hex: '#fafafa' },
    { title: 'COLOR', name: 'color-malachite', hex: '#1cc54e' },
    { title: 'COLOR', name: 'color-malachite-light', hex: '#3db899' },
    { title: 'COLOR', name: 'color-malachite-dark', hex: '#2b8c47' },
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
