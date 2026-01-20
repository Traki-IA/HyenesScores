import React, { useState } from 'react';

export default function HyeneScores() {
  const [selectedTab, setSelectedTab] = useState('classement');

  // États Classement
  const [selectedChampionship, setSelectedChampionship] = useState('hyenes');
  const [selectedSeason, setSelectedSeason] = useState('9');
  const [isSeasonOpen, setIsSeasonOpen] = useState(false);
  const [isChampOpen, setIsChampOpen] = useState(false);

  const championships = [
    { id: 'hyenes', icon: '🏆', name: 'Ligue des Hyènes' },
    { id: 'france', icon: '🇫🇷', name: 'France' },
    { id: 'spain', icon: '🇪🇸', name: 'Espagne' },
    { id: 'italy', icon: '🇮🇹', name: 'Italie' },
    { id: 'england', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'Angleterre' }
  ];

  const teams = [
    { rank: 1, name: 'MILAN AC', pts: 95, record: '30-5-18', goalDiff: '116-67', diff: '+49' },
    { rank: 2, name: 'STOCKY FC', pts: 86, record: '24-14-15', goalDiff: '116-89', diff: '+27' },
    { rank: 3, name: 'BIMBAM', pts: 84, record: '25-9-19', goalDiff: '119-96', diff: '+23' },
    { rank: 4, name: 'DYNAMO KEV', pts: 82, record: '26-4-23', goalDiff: '119-110', diff: '+09' },
    { rank: 5, name: 'TRAKNAR FC', pts: 74, record: '21-11-21', goalDiff: '111-105', diff: '+06' },
    { rank: 6, name: 'FC GRINTA', pts: 74, record: '22-8-23', goalDiff: '96-102', diff: '-06' },
    { rank: 7, name: 'COMARDINHO', pts: 71, record: '20-11-22', goalDiff: '94-107', diff: '-13' },
    { rank: 8, name: 'MAMBA TEAM', pts: 64, record: '18-10-25', goalDiff: '96-110', diff: '-14' },
    { rank: 9, name: 'WARNAQUE', pts: 61, record: '17-10-26', goalDiff: '94-110', diff: '-16' },
    { rank: 10, name: 'NOPIGOAL FC', pts: 61, record: '16-12-26', goalDiff: '86-121', diff: '-35' }
  ];

  // États Palmarès
  const champions = [
    { season: '9', team: 'MILAN AC', points: 95 },
    { season: '8', team: 'STOCKY FC', points: 92 },
    { season: '7', team: 'BIMBAM', points: 88 },
    { season: '6', team: 'MILAN AC', points: 90 },
    { season: '5', team: 'DYNAMO KEV', points: 87 },
    { season: '4', team: 'TRAKNAR FC', points: 85 },
    { season: '3', team: 'FC GRINTA', points: 83 },
    { season: '2', team: 'MILAN AC', points: 89 },
    { season: '1', team: 'STOCKY FC', points: 86 }
  ];

  // États Panthéon
  const pantheonTeams = [
    { rank: 1, name: 'MILAN AC', trophies: 15, france: 5, spain: 4, italy: 4, england: 2, total: 15 },
    { rank: 2, name: 'STOCKY FC', trophies: 12, france: 4, spain: 3, italy: 3, england: 2, total: 12 },
    { rank: 3, name: 'BIMBAM', trophies: 10, france: 3, spain: 3, italy: 2, england: 2, total: 10 },
    { rank: 4, name: 'DYNAMO KEV', trophies: 8, france: 2, spain: 2, italy: 2, england: 2, total: 8 },
    { rank: 5, name: 'TRAKNAR FC', trophies: 6, france: 2, spain: 1, italy: 2, england: 1, total: 6 },
    { rank: 6, name: 'FC GRINTA', trophies: 5, france: 1, spain: 2, italy: 1, england: 1, total: 5 },
    { rank: 7, name: 'COMARDINHO', trophies: 3, france: 1, spain: 1, italy: 1, england: 0, total: 3 },
    { rank: 8, name: 'MAMBA TEAM', trophies: 2, france: 1, spain: 0, italy: 1, england: 0, total: 2 },
    { rank: 9, name: 'WARNAQUE', trophies: 1, france: 0, spain: 1, italy: 0, england: 0, total: 1 },
    { rank: 10, name: 'NOPIGOAL FC', trophies: 0, france: 0, spain: 0, italy: 0, england: 0, total: 0 }
  ];

  // États Match
  const [selectedJournee, setSelectedJournee] = useState('1');
  const [isJourneeOpen, setIsJourneeOpen] = useState(false);
  const [matches, setMatches] = useState([
    { id: 1, homeTeam: 'MILAN AC', awayTeam: 'STOCKY FC', homeScore: 2, awayScore: 2 },
    { id: 2, homeTeam: 'DYNAMO KEV', awayTeam: 'BIMBAM', homeScore: 4, awayScore: 4 },
    { id: 3, homeTeam: '', awayTeam: '', homeScore: null, awayScore: null },
    { id: 4, homeTeam: '', awayTeam: '', homeScore: null, awayScore: null },
    { id: 5, homeTeam: '', awayTeam: '', homeScore: null, awayScore: null }
  ]);

  const allTeams = [
    'MILAN AC', 'STOCKY FC', 'BIMBAM', 'DYNAMO KEV', 'TRAKNAR FC',
    'FC GRINTA', 'COMARDINHO', 'MAMBA TEAM', 'WARNAQUE', 'NOPIGOAL FC'
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [exemptTeam, setExemptTeam] = useState('');
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [showAddSeasonModal, setShowAddSeasonModal] = useState(false);

  const seasons = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const journees = Array.from({ length: 18 }, (_, i) => (i + 1).toString());

  // États Réglages
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetConfirmation, setResetConfirmation] = useState('');

  // Fonctions Match
  const getAvailableTeams = (currentMatchId, currentType) => {
    const selectedTeams = [];
    matches.forEach(match => {
      if (match.id === currentMatchId) {
        if (currentType === 'home' && match.awayTeam) selectedTeams.push(match.awayTeam);
        else if (currentType === 'away' && match.homeTeam) selectedTeams.push(match.homeTeam);
      } else {
        if (match.homeTeam) selectedTeams.push(match.homeTeam);
        if (match.awayTeam) selectedTeams.push(match.awayTeam);
      }
    });
    if (exemptTeam) selectedTeams.push(exemptTeam);
    return allTeams.filter(team => !selectedTeams.includes(team));
  };

  const getAvailableTeamsForExempt = () => {
    const selectedTeams = [];
    matches.forEach(match => {
      if (match.homeTeam) selectedTeams.push(match.homeTeam);
      if (match.awayTeam) selectedTeams.push(match.awayTeam);
    });
    return allTeams.filter(team => !selectedTeams.includes(team));
  };

  const handleTeamSelect = (matchId, type, team) => {
    setMatches(matches.map(m => 
      m.id === matchId ? { ...m, [type === 'home' ? 'homeTeam' : 'awayTeam']: team } : m
    ));
    setOpenDropdown(null);
  };

  const toggleDropdown = (matchId, type) => {
    setOpenDropdown(openDropdown?.matchId === matchId && openDropdown?.type === type ? null : { matchId, type });
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setIsSeasonOpen(false);
  };

  const handleJourneeSelect = (journee) => {
    setSelectedJournee(journee);
    setIsJourneeOpen(false);
  };

  // Fonctions Réglages
  const handleExportJSON = () => {
    try {
      const data = {
        classement: teams,
        matches,
        palmares: champions,
        pantheon: pantheonTeams,
        exportDate: new Date().toISOString(),
        version: '1.0'
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `hyenescores-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Erreur lors de l\'export JSON');
    }
  };

  const handleReset = () => {
    if (resetConfirmation === 'SUPPRIMER') {
      alert('Données réinitialisées (simulation)');
      setShowResetModal(false);
      setResetConfirmation('');
    } else {
      alert('Veuillez taper "SUPPRIMER" pour confirmer');
    }
  };

  return (
    <div className="h-screen bg-black text-white font-sans flex flex-col overflow-hidden safe-top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-tap-highlight-color: transparent;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        body {
          background-color: #000000;
        }
        .safe-top {
          padding-top: env(safe-area-inset-top);
        }
      `}</style>

      {/* CLASSEMENT */}
      {selectedTab === 'classement' && (
        <div className="h-full flex flex-col">
          <div className="px-4 pt-4 pb-2 flex-shrink-0">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/50 rounded-xl p-3 text-center">
              <h1 className="text-cyan-400 text-2xl font-bold tracking-widest">CLASSEMENT</h1>
            </div>
          </div>

          <div className="flex-1 px-4 pb-3 overflow-hidden">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl h-full flex flex-col overflow-hidden">

              {/* Selectors */}
              <div className="px-3 py-2 border-b border-gray-800 flex-shrink-0 relative">
                <div className="flex items-stretch gap-2">
                  <div className="flex-1 relative">
                    <button
                      onClick={() => setIsChampOpen(!isChampOpen)}
                      className={`w-full h-full bg-black/50 border rounded-lg px-3 py-2.5 text-white text-sm font-medium cursor-pointer transition-colors flex items-center justify-between ${
                        isChampOpen ? 'border-cyan-500/50' : 'border-gray-800 hover:border-cyan-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{championships.find(c => c.id === selectedChampionship)?.icon}</span>
                        <span className="truncate">{championships.find(c => c.id === selectedChampionship)?.name}</span>
                      </div>
                      <svg className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${isChampOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isChampOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsChampOpen(false)}></div>
                        <div className="absolute left-0 right-0 top-full mt-1 bg-gray-900 border border-cyan-500/30 rounded-lg shadow-2xl z-50 max-h-64 overflow-y-auto">
                          {championships.map(champ => (
                            <button
                              key={champ.id}
                              onClick={() => {
                                setSelectedChampionship(champ.id);
                                setIsChampOpen(false);
                              }}
                              className={`w-full px-3 py-2.5 text-sm font-medium text-left transition-colors flex items-center gap-2 ${
                                selectedChampionship === champ.id
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'text-white hover:bg-gray-800'
                              }`}
                            >
                              <span className="text-xl">{champ.icon}</span>
                              <span>{champ.name}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="w-32 relative">
                    <button
                      onClick={() => setIsSeasonOpen(!isSeasonOpen)}
                      className={`w-full h-full bg-black/50 border rounded-lg px-3 py-3 text-white text-sm font-medium cursor-pointer transition-colors min-h-[48px] flex items-center justify-between ${
                        isSeasonOpen ? 'border-cyan-500/50' : 'border-gray-800 hover:border-cyan-500/30'
                      }`}
                    >
                      <span>Saison {selectedSeason}</span>
                      <svg className={`w-5 h-5 text-gray-500 transition-transform ${isSeasonOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isSeasonOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsSeasonOpen(false)}></div>
                        <div className="absolute right-0 top-full mt-1 bg-gray-900 border border-cyan-500/30 rounded-lg shadow-2xl z-50 w-32 max-h-64 overflow-y-auto">
                          {seasons.map(season => (
                            <button
                              key={season}
                              onClick={() => handleSeasonSelect(season)}
                              className={`w-full px-4 py-3 text-sm font-medium text-left transition-colors min-h-[44px] flex items-center ${
                                selectedSeason === season
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'text-white hover:bg-gray-800'
                              }`}
                            >
                              Saison {season}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-3 py-1.5 border-b border-gray-800 flex-shrink-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-500 text-xs font-semibold">Journée 53/72</span>
                  <span className="text-cyan-400 text-xs font-bold">73.6%</span>
                </div>
                <div className="bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-full rounded-full" style={{ width: '73.6%' }}></div>
                </div>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-1 px-3 py-1.5 bg-gray-900/50 border-b border-gray-800 flex-shrink-0">
                <div className="col-span-1 text-gray-500 text-xs font-semibold tracking-widest text-center">#</div>
                <div className="col-span-3 text-gray-500 text-xs font-semibold tracking-widest text-left">CLUB</div>
                <div className="col-span-2 text-gray-500 text-xs font-semibold tracking-widest text-center">PTS</div>
                <div className="col-span-2 text-gray-500 text-xs font-semibold tracking-widest text-center">V-N-D</div>
                <div className="col-span-3 text-gray-500 text-xs font-semibold tracking-widest text-center">BP:BC</div>
                <div className="col-span-1 text-gray-500 text-xs font-semibold tracking-widest text-center">DIF</div>
              </div>

              {/* Teams List */}
              <div className="flex-1 overflow-y-auto px-3 pb-1">
                {teams.map(team => (
                  <div
                    key={team.rank}
                    className="grid grid-cols-12 gap-1 py-1.5 border-b border-gray-800/50 hover:bg-gray-900/30 transition-all items-center"
                    style={{ height: '40px', minHeight: '40px', maxHeight: '40px' }}
                  >
                    <div className="col-span-1 font-bold text-sm whitespace-nowrap overflow-hidden text-cyan-400">
                      {team.rank < 10 ? `0${team.rank}` : team.rank}
                    </div>
                    <div className="col-span-3 flex items-center whitespace-nowrap overflow-hidden">
                      <span className="text-white font-semibold text-xs tracking-wide truncate">{team.name}</span>
                    </div>
                    <div className="col-span-2 text-center whitespace-nowrap overflow-hidden">
                      <span className="text-green-500 font-bold text-lg drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]">{team.pts}</span>
                    </div>
                    <div className="col-span-2 text-center text-white text-xs font-medium whitespace-nowrap overflow-hidden">
                      {team.record}
                    </div>
                    <div className="col-span-3 text-center text-white text-xs font-medium whitespace-nowrap overflow-hidden">
                      {team.goalDiff}
                    </div>
                    <div className="col-span-1 text-center whitespace-nowrap overflow-hidden">
                      <span className={`text-xs font-semibold ${team.diff.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {team.diff}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MATCH - NOUVELLE VERSION V3 */}
      {selectedTab === 'match' && (
        <div className="h-full flex flex-col">
          <div className="px-4 pt-4 pb-2 flex-shrink-0">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/50 rounded-xl p-3 text-center">
              <h1 className="text-cyan-400 text-2xl font-bold tracking-widest">MATCHS</h1>
            </div>
          </div>

          <div className="flex-1 px-4 pb-3 overflow-hidden">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl h-full flex flex-col overflow-hidden">
