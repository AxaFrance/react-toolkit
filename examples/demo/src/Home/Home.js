
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from 'shared/Title';
import { Table, Paging, Loader } from '@axa-fr/react-toolkit-all';
import './Home.scss';
import Action from "@axa-fr/react-toolkit-action";
import Button from "@axa-fr/react-toolkit-button";

const Home = ({ items, numberItemsTotal, filters, loaderMode, onChangePaging, onChangeFilter }) => (
  <>
    <Title>Page d'accueil</Title>
    <div className="af-home container">
      <Link className="btn af-btn af-btn--quote" to="/new">
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
                    <i className="glyphicon glyphicon-sorting" />
                  </Button>
                </span>
              </Table.Th>
              <Table.Th classModifier="sortable">
                <span className="af-table__th-content">
                <Button className="af-btn" classModifier="table-sorting" onClick={()=>{onChangeFilter("type")}}>
                  <span className="af-btn__text">Type</span>
                  <i className="glyphicon glyphicon-sorting" />
                </Button>
                  </span>
              </Table.Th>
              <Table.Th classModifier="sortable">
                <span className="af-table__th-content">
                  <Button className="af-btn" classModifier="table-sorting" onClick={()=>{onChangeFilter("agent")}}>
                    <span className="af-btn__text">Agent</span>
                    <i className="glyphicon glyphicon-sorting" />
                  </Button>
                </span>
              </Table.Th>
              <Table.Th>Date de naissance</Table.Th>
              <Table.Th classModifier="sortable"><span className="af-table__th-content">
                  <Button className="af-btn" classModifier="table-sorting" onClick={()=>{onChangeFilter("startDate")}}>
                    <span className="af-btn__text">Date d'entrée</span>
                    <i className="glyphicon glyphicon-sorting" />
                  </Button>
                </span></Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Header>
          <Table.Body>
            {items.map(
              ({ id, firstname, lastname, type, agent, birthdate, begin }) => (
                <Table.Tr key={id}>
                  <Table.Td>
                    {firstname} {lastname}
                  </Table.Td>
                  <Table.Td>{type}</Table.Td>
                  <Table.Td>{agent}</Table.Td>
                  <Table.Td>{birthdate}</Table.Td>
                  <Table.Td>{begin}</Table.Td>
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
