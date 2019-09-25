import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from 'shared/Title';
import { Table, Paging, Loader } from '@axa-fr/react-toolkit-all';
import './Home.scss';

const Home = ({ items, loaderMode, onClick }) => (
  <>
    <Title>Page d'accueil</Title>
    <div className="af-home container">
      <a className="btn af-btn af-btn--quote" onClick={onClick}>
        <span className="af-btn__text">Nouveau devis</span>
      </a>
      <h1 className="af-title--content">{`Vos devis en cours (${
        items.length
      })`}</h1>
      <Loader mode={loaderMode}>
        <Table>
          <Table.Header>
            <Table.Tr>
              <Table.Th>Nom prénom</Table.Th>
              <Table.Th>type</Table.Th>
              <Table.Th>Agent</Table.Th>
              <Table.Th>Date de naissance</Table.Th>
              <Table.Th>Date d'entrée</Table.Th>
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
                  <Table.Td>{'action'}</Table.Td>
                </Table.Tr>
              )
            )}
          </Table.Body>
        </Table>
        <Paging
          onChange={() => {}}
          numberItems={items.length}
          numberPages={1}
          currentPage={1}
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
