import Markdown from 'components/Markdown';
import Layout from 'components/Layout/ComponentPage';
import Head from 'components/Layout/Head';
import Demo from 'components/Demo';
import Style from 'components/Style';
import getInitialProps from 'shared/getInitialProps';
import template from './templates/title-bar.pug';
import templateComplex from './templates/title-bar-complex.pug';
import './index.scss';
import 'node_modules/@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

const TitleBar = ({
  title,
  content,
  meta,
  importcss,
  usage,
  typography,
  headerLinks,
  colors,
  structure,
  type
}) => (
  <Layout
    headerLinks={headerLinks}
    title={title}
    content={content}
    type={type}
    demo={
      <>
        <Demo
          title="Classic TitleBar"
          template={template}
          importcss={importcss}
        />
        <Demo
          title="Complex TitleBar"
          template={templateComplex}
          importcss={importcss}
        />
      </>
    }
    usage={<Markdown source={usage} />}
    style={
      <Style colors={colors} typography={typography} structure={structure} />
    }
  >
    <Head meta={meta} />
  </Layout>
);

TitleBar.getInitialProps = getInitialProps('title-bar');

export default TitleBar;
