import Font from '../../../Font/Font';

const MainMessage = () => {
  const message = 'Align! Align! Align!';
  return (
    <Font family="Montserrat" size={20} weight={800}>
      {message}
    </Font>
  );
};

export default MainMessage;
