function BestBtn(props) {
  return <button className={`bBtn ${props.large ? 'large' : ''}${props.accent ? 'accent' : ''}`}> Best btn </button>;
}
