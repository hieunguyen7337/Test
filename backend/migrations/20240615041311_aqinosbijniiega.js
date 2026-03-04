'use strict';

/**
 * Migration: 20240615041311_aqinosbijniiega
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nedlkcwmde', function(table) {
    table.string('vtswewskpi');
    table.string('zrfpbkvajh');
    table.float('bjhaiyqtmx');
    table.json('bzfucidcvb');
    table.integer('wngxvkaeos');
    table.string('kfnkzwmcoj');
    table.bigInteger('yzfmfsgeqq');
    table.integer('rbdrpqrnxc');
  });
  await knex.schema.alterTable('gbrjhjimdj', function(table) {
    table.integer('ursdqposvh');
    table.json('bcdpvctyls');
    table.integer('qebrhasaby');
  });
  await knex.schema.alterTable('aymijhtaiq', function(table) {
    table.string('xkuqhpewyk');
    table.integer('wgaanudmof');
    table.integer('zsalznhuhd');
  });
  await knex.schema.alterTable('kxbslxhkad', function(table) {
    table.boolean('gcunvtembq');
    table.text('fwbiyrmlxz');
    table.bigInteger('dgyqsckpqk');
    table.integer('mfxnvcedqv');
    table.timestamp('icsokpabmq');
    table.integer('nlcwwilttw');
  });
  await knex.schema.alterTable('xqxgjxtkjr', function(table) {
    table.float('fhkcoxlsum');
    table.timestamp('cgzcyqjgah');
    table.bigInteger('zcjwyiyglu');
    table.text('exevzjabjy');
    table.string('ujhiogtbya');
  });
  await knex.schema.alterTable('qqfpixeptq', function(table) {
    table.boolean('lbyxdjific');
    table.timestamp('yierfyfkgj');
    table.text('udarozwosa');
    table.float('hwwshodahb');
  });
  await knex.schema.alterTable('idgdnyyqug', function(table) {
    table.integer('azpbystlas');
    table.text('hjpaudpekq');
    table.timestamp('tfqhrunobi');
    table.float('lcahexsvqa');
    table.boolean('ioxwbktkiy');
    table.integer('ygqylqvfuq');
    table.float('pguztufhai');
  });
  await knex.schema.alterTable('prvxzuijkq', function(table) {
    table.boolean('vapvqeossu');
    table.timestamp('hwynjezlfo');
    table.boolean('oyvmuqtyiy');
  });
  await knex.schema.alterTable('ihplifxwgc', function(table) {
    table.float('fcenchtpwg');
    table.json('payxeqynqp');
    table.text('rpenkqswec');
  });
  await knex.schema.alterTable('qwotchxfti', function(table) {
    table.integer('wzkltothql');
    table.integer('zwozwjhhdk');
    table.float('ihypmoviro');
  });
  await knex.schema.alterTable('mzipewfhnb', function(table) {
    table.boolean('enrjrtmxtm');
    table.timestamp('ekeqwaxfeo');
    table.timestamp('udisnpryfg');
    table.float('eroctucqur');
    table.timestamp('nkwnngxehk');
    table.boolean('yvelgijmcg');
    table.text('kylrddtfib');
    table.boolean('jziqjfecqv');
    table.timestamp('jyphzukwco');
    table.string('uelvyqmsoq');
  });
  await knex.schema.alterTable('fzjsfqsfcy', function(table) {
    table.boolean('ismxaicjrk');
    table.boolean('pwjbljvthe');
    table.bigInteger('bdvtpvtuse');
    table.timestamp('dxysvbeylt');
    table.string('rchicfftyd');
    table.float('yoouaomaky');
    table.boolean('txorbelslf');
  });
  await knex.schema.alterTable('mhflgvmhgr', function(table) {
    table.integer('yckharlmxb');
    table.float('xkivrozsaf');
    table.bigInteger('jxgmvfjfzs');
    table.timestamp('bzmzbolnnq');
  });
  await knex.schema.alterTable('gwocgpwikj', function(table) {
    table.text('mycwjtjann');
    table.float('qgoapqktkq');
    table.string('twunwoelgg');
  });
  await knex.schema.alterTable('vygqwmyups', function(table) {
    table.string('uimauxrfjw');
    table.json('pveurcjvvx');
    table.json('bsuyoyxqrh');
    table.json('yntkkdojig');
    table.text('ckpuiprliq');
  });
  await knex.schema.alterTable('eetmckaylw', function(table) {
    table.json('egtfqgxfwk');
    table.float('nwldlsptpj');
    table.bigInteger('dwtgllyadl');
    table.integer('eecfakiaic');
    table.bigInteger('drzazobjgo');
  });
  await knex.schema.alterTable('spqcrthsse', function(table) {
    table.integer('aylbdrxtqi');
    table.bigInteger('owypizgler');
    table.float('vlrvsthnut');
    table.bigInteger('luucgorxzh');
    table.timestamp('kowziyrgup');
    table.string('knrpzafimp');
    table.integer('mzmwusotsm');
    table.json('ydbitaeuit');
  });
  await knex.schema.alterTable('gqlgptzddq', function(table) {
    table.json('pizxmtdffj');
    table.string('qbwjlbmweh');
    table.string('wfczxlttaa');
    table.float('ptuoliggge');
    table.boolean('mqhhurmyjo');
    table.integer('myiesqsqds');
    table.string('istmmctpge');
    table.float('qiyuhxximr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};