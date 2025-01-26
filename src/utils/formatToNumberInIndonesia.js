const formatNumberInIndonesia = (number) => {
  return Intl.NumberFormat('id-ID').format(number)
}

export default formatNumberInIndonesia
