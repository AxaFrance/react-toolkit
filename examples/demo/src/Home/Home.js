import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from 'shared/Title';
import Table, { Paging } from '@axa-fr/react-toolkit-table';
import Loader from '@axa-fr/react-toolkit-loader';
import './Home.scss';
import Action from "@axa-fr/react-toolkit-action";
import Button from "@axa-fr/react-toolkit-button";

const Home = ({ items, numberItemsTotal, filters, loaderMode, onChangePaging, onChangeFilter }) => (
  <>
    <Title>Page d'accueil</Title>
    <div className="af-home container">
      <Link className="btn af-btn af-btn--quote" to="/quote/new">
        <span className="af-btn__text">Nouveau devis</span>
      </Link>
      <h1 className="af-title--content">{`Vos devis en cours (${
        numberItemsTotal
      })`}</h1>
      <Loader mode={loaderMode}>
        <Table>
          <Table.Header>
            <Table.Tr>
              <Table.Th  classModifier="sortable">
                <span className="af-table__th-content">
                  <Button className="af-btn" classModifier="table-sorting" onClick={()=>{onChangeFilter("fullName")}}>
                    <span className="af-btn__text">Nom prénom</span>
                    <i className={"glyphicon " + (filters.columns.fullName.value === null ? "glyphicon-sorting" : `glyphicon-sorting-${filters.columns.fullName.value}`) } />
                  </Button>
                </span>
              </Table.Th>
              <Table.Th classModifier="sortable">
                <span className="af-table__th-content">
                <Button className="af-btn" classModifier="table-sorting" onClick={()=>{onChangeFilter("type")}}>
                  <span className="af-btn__text">Type</span>
                  <i className={"glyphicon " + (filters.columns.type.value === null ? "glyphicon-sorting" : `glyphicon-sorting-${filters.columns.type.value}`) } />
                </Button>
                  </span>
              </Table.Th>
              <Table.Th classModifier="sortable">
                <span className="af-table__th-content">
                  <Button className="af-btn" classModifier="table-sorting" onClick={()=>{onChangeFilter("agent")}}>
                    <span className="af-btn__text">Agent</span>
                    <i className={"glyphicon " + (filters.columns.agent.value === null ? "glyphicon-sorting" : `glyphicon-sorting-${filters.columns.agent.value}`) } />
                  </Button>
                </span>
              </Table.Th>
              <Table.Th>Date de naissance</Table.Th>
              <Table.Th classModifier="sortable"><span className="af-table__th-content">
                  <Button className="af-btn" classModifier="table-sorting" onClick={()=>{onChangeFilter("beginDate")}}>
                    <span className="af-btn__text">Date d'entrée</span>
                    <i className={"glyphicon " + (filters.columns.beginDate.value === null ? "glyphicon-sorting" : `glyphicon-sorting-${filters.columns.beginDate.value}`) } />
                  </Button>
                </span></Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Header>
          <Table.Body>
            {items.map(
              ({ id, fullName, type, agent, birthdate, beginDate }) => (
                <Table.Tr key={id}>
                  <Table.Td>
                    {fullName}
                  </Table.Td>
                  <Table.Td>{type}</Table.Td>
                  <Table.Td>{agent}</Table.Td>
                  <Table.Td>{birthdate}</Table.Td>
                  <Table.Td>{beginDate.toLocaleDateString('fr')}</Table.Td>
                  <Table.Td><Action
                    id="id"
                    icon="edit"
                    title="Editer"
                    onClick={() => {}}
                  /></Table.Td>
                </Table.Tr>
              )
            )}
          </Table.Body>
        </Table>
        <Paging
          onChange={onChangePaging}
          numberItems={filters.paging.numberItemsByPage}
          numberPages={filters.paging.numberPages}
          currentPage={filters.paging.currentPage}
          id="home_paging"
        />
      </Loader>
    </div>
  </>
);

Home.defaultProps = {
  items: [],
  loaderMode: '',
};
Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      type: PropTypes.string,
      agent: PropTypes.string,
      birthdate: PropTypes.string,
      begin: PropTypes.string,
    })
  ),
  loaderMode: PropTypes.string,
};

export default Home;
