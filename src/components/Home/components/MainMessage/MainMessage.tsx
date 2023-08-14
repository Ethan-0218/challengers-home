import Font from '../../../Font/Font';

const MainMessage = () => {
  const message = '오늘도 화이팅🔥';
  return (
    <Font family="Montserrat" size={20} weight={800}>
      {message}
    </Font>
  );
};

export default MainMessage;
