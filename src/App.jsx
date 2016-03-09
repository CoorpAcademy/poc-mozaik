import React         from 'react';
import Mozaik        from 'mozaik/browser';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;



React.render(<MozaikComponent />, document.getElementById('mozaik'));

ConfigActions.loadConfig();