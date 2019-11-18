import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';
import NoteDialogBox from './pages/notedialogbox'
import ForgetPassword from './pages/forgetpassword';
import ResetPassword from './pages/resetpassword'
import Sidenav from './pages/sidenav';
import Header from './pages/header';
import DisplayNote from './pages/displaynote';
import Property from './pages/properties';
import CreateNote from './pages/createnote';
import Color from './pages/color';
import Remainder from './pages/addreminder';
import Collaborator from './pages/collaborator';
import AddLabel from './pages/addlabel';
import EditLabel from './pages/editlabel';
 import './App.css';
import ReminderComponent from './pages/remindercomponent';
import NotesComponent from './pages/notescomponent';
import TrashComponent from './pages/trashcomponent';
import ArchiveComponent from './pages/archivecomponent';
import LabelNoteComponent from './pages/labelnotecomponent';
import ElasticSearch from './pages/elasticSearch';
import Dashboard from './pages/dashboard';
import HeaderElastic from './pages/headerelastic';
import PropertyArchive from './pages/propertyarchive';
import HeaderArchive from './pages/headerarchive';
import GetTrash from './pages/gettrash';
import HeaderRemainder from './pages/headerremainder';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route path='/forgetpassword' component={ForgetPassword} />
          <Route path='/resetpassword/:token' component={ResetPassword} />
          <Route path='/sidenav' component={Sidenav} />
          <Route path='/displaynote' component={DisplayNote} />
          <Route path='/property' component={Property} />
          <Route path='/createnote' component={CreateNote}/>
          <Route path='/header' component={Header} />
          <Route path='/notedialogbox' component={NoteDialogBox} />
          <Route path='/color' component={Color} />
          <Route path='/reminder' component={Remainder} />
          <Route path='/collaborator' component={Collaborator} />
          <Route path='/addlabel' component={AddLabel} />
          <Route path='/editlabel' component={EditLabel} />
          <Route path='/getremindernotes' component={ReminderComponent} />
          <Route path='/notes' component={NotesComponent}/>
          <Route path='/gettrash' component={TrashComponent}/>
          <Route path='/getarchive' component={ArchiveComponent}/>
          <Route path='/getlabelnotes/:labelId' component={LabelNoteComponent}/>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/elasticsearch' component={ElasticSearch} />
          <Route path='/headerelastic' component={HeaderElastic} />
          <Route path='/propertyarchive' component={PropertyArchive} />
          <Route path='/headerarchive' component={HeaderArchive} />
          <Route path='/trash' component={GetTrash} />
          <Route path='/headerremainder' component={HeaderRemainder} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;