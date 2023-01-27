const artists = [
    {
      id: '1',
    name: 'Jimi Hendrix',
    instrument: {
        id: '1',
      name: 'Guitar',
      color: 'wood',
    }
  },
  {
      id: '2',
    name: 'Jimmy Page',
    instrument: {
        id: '1',
      name: 'Guitar',
      color: 'wood',
    }
  },
  {
      id: '3',
    name: 'Krist Novoselic',
    instrument: {
        id: '2',
      name: 'Bass',
      color: 'black',
    }
  },
  {
    id: '4',
    name: 'Emmanuelle Proulx',
  },
  {
    id: '5',
    name: 'Jimmy Chamberlin',
    instrument: {
        id: '3',
      name: 'Drums'
    }
  },
];

const instrumentos = artists.map((artista) => {
  const name = artista?.instrument?.name || 'No tiene';
  const color = artista?.instrument?.color || 'No tiene';
  return {name, color}
})
console.log(instrumentos)