$(() => {

  //для переключения фона
  const colorArray = [
    "rgb(34, 49, 63)",
    "rgb(44, 62, 80)",
    "rgb(58, 83, 155)"
  ];

  const modalBox = $('#modal')
  const showDialogBox = () => modalBox.fadeIn(400);
  const closeDialogBox = () => {
    $('#input').val('');
    modalBox.fadeOut(400);
  }

  $('.togglePicture').on('click',() => {
      const label = $('#label')
      const image = $('#os-logo')

      const changeLabelAndPicture = (textValue) => {
        const timer = 300;
        image.fadeOut(timer, () => {
            image.attr('src', `resource/${textValue.toLowerCase()}-logo.png`)
          }).fadeIn(timer)
        label.fadeOut(timer, () => {
            label.text(textValue)
          }).fadeIn(timer);
      }

      console.log(`label text: ${label.text()}`)
      if (label.text() === 'Linux') {
        changeLabelAndPicture('Windows')
      } else {
        changeLabelAndPicture('Linux')
      }
    })

  $('.changeBack').on('click',() => {
    const mainDiv = $('#container')
    const oldBackground = mainDiv.css('background-color')
    switch (oldBackground) {
      case colorArray[0]:
        mainDiv.css({ 'background-color': colorArray[1]});
        break;
      case colorArray[1]:
        mainDiv.css({ 'background-color': colorArray[2]});
        break;
      case colorArray[2]:
        mainDiv.css({ 'background-color': colorArray[0]});
        break;
    }
  })

  $('#showModalButton').on('click', () => showDialogBox())

  $('#cancel-button').on('click', () => closeDialogBox());

  $('#ok-button').on('click',() => {
    const input = $('#input')
    $('#welcome-text')
      .text(`Hello, ${input.val()}! How are you?`)
    closeDialogBox()
  })
})
