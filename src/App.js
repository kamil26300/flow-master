import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import KanbanBoard from './component/KanbanBoard';
import { fetchData } from './utils/api';
import './styles/App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setTickets(data.tickets);
      setUsers(data.users);
    };

    // Load grouping and sorting from URL
    const params = new URLSearchParams(window.location.search);
    const savedGrouping = params.get('grouping');
    const savedSorting = params.get('sorting');
    
    if (savedGrouping) setGrouping(savedGrouping);
    if (savedSorting) setSorting(savedSorting);

    loadData();
  }, []);

  useEffect(() => {
    // Save grouping and sorting to URL
    const params = new URLSearchParams(window.location.search);
    params.set('grouping', grouping);
    params.set('sorting', sorting);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [grouping, sorting]);

  return (
    <div className="app">
      <Header 
        grouping={grouping} 
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <KanbanBoard 
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
}

export default App;