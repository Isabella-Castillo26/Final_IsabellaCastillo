ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-78.896224, -6.821195, -78.659638, -6.614523]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_cortado_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'cortado<br />\
    <img src="styles/legend/cortado_1_0.png" /> 166<br />\
    <img src="styles/legend/cortado_1_1.png" /> 4478<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/cortado_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8846183.784927, -867178.084002, -8652602.167620, -514796.193712]
        })
    });
var lyr_Mapadesombras_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa de sombras<br />\
    <img src="styles/legend/Mapadesombras_2_0.png" /> 1<br />\
    <img src="styles/legend/Mapadesombras_2_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Mapadesombras_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8846183.784927, -867178.084002, -8652602.167620, -514796.193712]
        })
    });
var lyr_pendiente_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'pendiente<br />\
    <img src="styles/legend/pendiente_3_0.png" /> <= 15.0000<br />\
    <img src="styles/legend/pendiente_3_1.png" /> 15.0000 - 30.0000<br />\
    <img src="styles/legend/pendiente_3_2.png" /> 30.0000 - 45.0000<br />\
    <img src="styles/legend/pendiente_3_3.png" /> 45.0000 - 60.0000<br />\
    <img src="styles/legend/pendiente_3_4.png" /> > 60.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/pendiente_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8846183.784927, -867178.084002, -8652602.167620, -514796.193712]
        })
    });
var format_RVV_4 = new ol.format.GeoJSON();
var features_RVV_4 = format_RVV_4.readFeatures(json_RVV_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RVV_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_4.addFeatures(features_RVV_4);
var lyr_RVV_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_4, 
                style: style_RVV_4,
                popuplayertitle: 'RVV',
                interactive: true,
                title: '<img src="styles/legend/RVV_4.png" /> RVV'
            });
var format_cajamarca_iiee_5 = new ol.format.GeoJSON();
var features_cajamarca_iiee_5 = format_cajamarca_iiee_5.readFeatures(json_cajamarca_iiee_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cajamarca_iiee_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cajamarca_iiee_5.addFeatures(features_cajamarca_iiee_5);
var lyr_cajamarca_iiee_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cajamarca_iiee_5, 
                style: style_cajamarca_iiee_5,
                popuplayertitle: 'cajamarca_iiee',
                interactive: true,
                title: '<img src="styles/legend/cajamarca_iiee_5.png" /> cajamarca_iiee'
            });
var format_Rios_Quebradas_6 = new ol.format.GeoJSON();
var features_Rios_Quebradas_6 = format_Rios_Quebradas_6.readFeatures(json_Rios_Quebradas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rios_Quebradas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_Quebradas_6.addFeatures(features_Rios_Quebradas_6);
var lyr_Rios_Quebradas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_Quebradas_6, 
                style: style_Rios_Quebradas_6,
                popuplayertitle: 'Rios_Quebradas',
                interactive: true,
                title: '<img src="styles/legend/Rios_Quebradas_6.png" /> Rios_Quebradas'
            });
var format_RVD_7 = new ol.format.GeoJSON();
var features_RVD_7 = format_RVD_7.readFeatures(json_RVD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RVD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_7.addFeatures(features_RVD_7);
var lyr_RVD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_7, 
                style: style_RVD_7,
                popuplayertitle: 'RVD',
                interactive: true,
                title: '<img src="styles/legend/RVD_7.png" /> RVD'
            });
var format_provincia_8 = new ol.format.GeoJSON();
var features_provincia_8 = format_provincia_8.readFeatures(json_provincia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_provincia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincia_8.addFeatures(features_provincia_8);
var lyr_provincia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincia_8, 
                style: style_provincia_8,
                popuplayertitle: 'provincia',
                interactive: true,
                title: '<img src="styles/legend/provincia_8.png" /> provincia'
            });

lyr_OSMStandard_0.setVisible(true);lyr_cortado_1.setVisible(true);lyr_Mapadesombras_2.setVisible(true);lyr_pendiente_3.setVisible(true);lyr_RVV_4.setVisible(true);lyr_cajamarca_iiee_5.setVisible(true);lyr_Rios_Quebradas_6.setVisible(true);lyr_RVD_7.setVisible(true);lyr_provincia_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cortado_1,lyr_Mapadesombras_2,lyr_pendiente_3,lyr_RVV_4,lyr_cajamarca_iiee_5,lyr_Rios_Quebradas_6,lyr_RVD_7,lyr_provincia_8];
lyr_RVV_4.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'Nombre de RVV:', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_cajamarca_iiee_5.set('fieldAliases', {'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre Institución educativa:', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Rios_Quebradas_6.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre Río Principal:', 'Longitud': 'Longitud', });
lyr_RVD_7.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'Nombre de RVD:', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_provincia_8.set('fieldAliases', {'fid': 'fid', 'CODIGO_PRO': 'Código de provincia:', 'NOMPRO': 'Nombre de la provincia:', 'CAPITAL': 'CAPITAL', 'SIMBOLO': 'SIMBOLO', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'NEWFIELD1': 'NEWFIELD1', 'CODIGO_DEP': 'CODIGO_DEP', 'NUMPROV': 'NUMPROV', 'Fotos': 'fotos turísticas:', 'INEI': 'INEI de provincia:', 'Gob Region': 'Gobierno Regional:', });
lyr_RVV_4.set('fieldImages', {'fid': 'Hidden', 'COD_DS11': 'ExternalResource', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'Hidden', 'PROV': 'Hidden', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'Hidden', 'OBS': 'Hidden', });
lyr_cajamarca_iiee_5.set('fieldImages', {'Código Modular': 'Hidden', 'Anexo': 'Hidden', 'Nombre de SS.EE.': 'ExternalResource', 'Ubigeo': 'Hidden', 'Departamento': 'Hidden', 'Provincia': 'Hidden', 'Distrito': 'Hidden', 'Código DRE/UGEL': 'Hidden', 'DRE / UGEL': 'Hidden', 'Centro Poblado': 'Hidden', 'Código Centro Poblado': 'Hidden', 'Código Local': 'Hidden', 'Dirección': 'Hidden', 'Nivel / Modalidad': 'Hidden', 'Gestion / Dependencia': 'Hidden', 'Altitud': 'Hidden', 'Fuente de coordenadas': 'Hidden', });
lyr_Rios_Quebradas_6.set('fieldImages', {'fid': 'Hidden', 'Rasgo_Prin': 'Hidden', 'Rasgo_Secu': 'Hidden', 'Nombre': 'ExternalResource', 'Longitud': 'Hidden', });
lyr_RVD_7.set('fieldImages', {'fid': 'Hidden', 'RODADURA': 'Hidden', 'COD_DS11': 'Hidden', 'COD_DS12': 'ExternalResource', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'Hidden', 'PROV': 'Hidden', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'Hidden', 'OBS': 'Hidden', 'SENTIDO': 'Hidden', 'BASE': 'Hidden', 'DATA': 'Hidden', 'FECHA_ACTU': 'Hidden', 'FUENTE': 'Hidden', 'COD_RODADU': 'Hidden', 'NOMBDIST': 'ExternalResource', 'CAPITAL': 'Hidden', });
lyr_provincia_8.set('fieldImages', {'fid': 'Hidden', 'CODIGO_PRO': 'ExternalResource', 'NOMPRO': 'ExternalResource', 'CAPITAL': 'Hidden', 'SIMBOLO': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'NEWFIELD1': 'Hidden', 'CODIGO_DEP': 'Hidden', 'NUMPROV': 'Hidden', 'Fotos': 'ExternalResource', 'INEI': 'ExternalResource', 'Gob Region': 'ExternalResource', });
lyr_RVV_4.set('fieldLabels', {'COD_DS11': 'header label - always visible', });
lyr_cajamarca_iiee_5.set('fieldLabels', {'Nombre de SS.EE.': 'no label', });
lyr_Rios_Quebradas_6.set('fieldLabels', {'Nombre': 'header label - always visible', });
lyr_RVD_7.set('fieldLabels', {'COD_DS12': 'no label', 'NOMBDIST': 'no label', });
lyr_provincia_8.set('fieldLabels', {'CODIGO_PRO': 'header label - always visible', 'NOMPRO': 'header label - always visible', 'Fotos': 'header label - always visible', 'INEI': 'header label - always visible', 'Gob Region': 'header label - always visible', });
lyr_provincia_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});