import React from 'react'
import PropType from 'prop-types'
import { defaultFormat } from 'moment';


function Duree(props){

  let {date} = props
  const now = new Date()
  let duree = "";

  if(date.getFullYear() === now.getFullYear() && now.getMonth() === date.getMonth() && now.getDate() === date.getDate() ){
      let diff = now.getTime() - date.getTime()
      if(diff < 60) /* moins de 60 secondes */
        duree = 'Il y a '+diff+' seconde(s)';
      else if(diff < 3600) /* moins d'une heure */
        duree =  'Il y a '+ Math.round(diff/60, 0)+' minute(s)';
      else if(diff < 10800) /* moins de 3 heures */
        duree = 'Il y a '+Math.round(diff/3600, 0)+' heures';
      else /*  plus de 3 heures ont affiche ajourd'hui à HH:MM:SS */
        duree = 'Aujourd\'hui à '+ date.getHours()+":"+date.getMinutes();
  }else if(date.getFullYear() === now.getFullYear() && now.getMonth() === date.getMonth()){
    duree = 'Il y a '+ ((now.getDate() - date.getDate())+1) + ' jour(s)' 
  }else if (now.getFullYear() === date.getFullYear()){
    duree = 'Il y a '+ (now.getMonth() - date.getMonth()) + ' mois' 
  }else{
    duree = 'Il y a ' + (now.getFullYear() - date.getFullYear()) + 'an(s)' 
  }
    

  return (<React.Fragment>{duree}</React.Fragment>)
}

Duree.PropType = {
  date: PropType.date
}

export default Duree;