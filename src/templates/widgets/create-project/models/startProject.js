class StartProject {
  constructor(
    uye_id,
    kategori_id,
    metrik_id,
    malzeme_id,
    secenek_id,
    tolerans_id,
    soru_id,
    renk_id,
    filtreler,
    cad_dosyasi,
    teknik_cizim,
    adet,
    genislik,
    yukseklik,
    derinlik,
    olcek,
    seri_no,
    aciklama
  ) {
    this.uye_id = uye_id;
    this.kategori_id = kategori_id;
    this.metrik_id = metrik_id;
    this.malzeme_id = malzeme_id;
    this.secenek_id = secenek_id;
    this.tolerans_id = tolerans_id;
    this.soru_id = soru_id;
    this.renk_id = renk_id;
    this.filtreler = filtreler;
    this.cad_dosyasi = cad_dosyasi;
    this.teknik_cizim = teknik_cizim;
    this.adet = adet;
    this.genislik = genislik;
    this.yukseklik = yukseklik;
    this.derinlik = derinlik;
    this.olcek = olcek;
    this.seri_no = seri_no;
    this.aciklama = aciklama;
  }
}

export default StartProject;
