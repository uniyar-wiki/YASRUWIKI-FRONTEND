import Rating from 'react-rating-stars-component';
const TeacherPage = ({ teacher }) => {
  const ratings = {
    knowledge: 4.5,
    teachingSkill: 4.7,
    communication: 4.2,
    easiness: 3.8,
    overall: 4.4,
  };

  return (
    <div id="content" className="mw-body" role="main">
      <h1 id="firstHeading" className="firstHeading" lang="ru">{teacher.name}</h1>
      <div id="bodyContent" className="mw-body-content">
        <div id="mw-content-text" lang="ru" dir="ltr" className="mw-content-ltr">
          <table className="wikitable card">
            <tbody>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <b>{teacher.name}</b>
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <img src={teacher.photo} className="teacher_photo"/>
                </td>
              </tr>
              <tr>
                <th>Альма-матер</th>
                <td>{teacher.almaMater}</td>
              </tr>
              <tr>
                <th>Учёная степень</th>
                <td>{teacher.degree}</td>
              </tr>
              <tr>
                <th>Работал</th>
                <td>
                  <ul>
                    {teacher.positions.map((position, index) => (
                      <li key={index}>{position}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <table width="100%" style={{ whiteSpace: 'nowrap' }}>
                    <tbody>
                      <tr>
                        <td width="135">Знания</td>
                        <td><Rating value={ratings.knowledge} size={24} /></td>
                      </tr>
                      <tr>
                        <td>Умение преподавать</td>
                        <td><Rating value={ratings.teachingSkill} size={24} /></td>
                      </tr>
                      <tr>
                        <td>В общении</td>
                        <td><Rating value={ratings.communication} size={24} /></td>
                      </tr>
                      <tr>
                        <td>«Халявность»</td>
                        <td><Rating value={ratings.easiness} size={24} /></td>
                      </tr>
                      <tr>
                        <td>Общая оценка</td>
                        <td><Rating value={ratings.overall} size={24} /></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <p>{teacher.biography}</p>
          {/* Добавьте дополнительные элементы по необходимости */}
        </div>
      </div>
    </div>
  );
};


const App = () => {
  const teacher = {
    name: 'Казарин Лев Сергеевич',
    photo: 'https://math.uniyar.ac.ru/file/get/7b6a0899-2889-4b17-8fc2-1d680425b1bd',
    almaMater: 'Пермский Госуниверситет им. А.М.Горького в 1968 г. Аспирантура при кафедре алгебры в 1971 г.',
    degree: 'Доктор физико-математических наук',
    positions: ['Кафедра алгебры и математической логики'],
    biography: 'Казарин Лев Сергеевич — профессор, доктор физико-математических наук, является заведующим кафедрой Алгебры и математической логики. Окончил Пермский Госуниверситет им. А.М. Горького в 1968 г. Аспирантуру при каф. алгебры в 1971 г. Защитил кандидатскую диссертацию в УрГУ (Свердловск, ныне Екатеринбург) 23 февраля 1972 г. Работал после аспирантуры в НИИУМС (г. Пермь) старшим научным сотрудником, зав. сектором. С сентября 1972 г. работал в ЯрГУ им. П.Г. Демидова старшим преподавателем, доцентом. В 1986 г. защитил докторскую диссертацию в Ленинградском гос.университете им. А.А. Жданова. С 1987 г. профессор, зав. кафедрой алгебры и мат. логики ЯрГУ. \n\n Лев Сергеевич занимается теорией групп и ее приложениями. В частности, вместе со своими учениками он получил решение задачи, поставленной 70 лет назад нобелевским лауреатом в области физики Юджином (Эухенио) Вигнером. Она фигурировала в качестве нерешенных в учебнике по алгебре А.И. Кострикина. Другие задачи, которые он решает со своими студентами, относятся к обработке сигналов, быстрым вычислениям и криптографии.'
  };

  return (
    <div>
      <TeacherPage teacher={teacher} />
    </div>
  );
};

export default App;
