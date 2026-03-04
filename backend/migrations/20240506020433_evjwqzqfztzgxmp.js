'use strict';

/**
 * Migration: 20240506020433_evjwqzqfztzgxmp
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ktscgojclq', function(table) {
    table.text('fzidwoawhv');
    table.text('rhgecinyko');
    table.integer('xuptvnlbes');
    table.bigInteger('jjelvsbnhs');
    table.bigInteger('qpmuaklugw');
    table.bigInteger('hhcdobbhqc');
  });
  await knex.schema.alterTable('odqnsfomqh', function(table) {
    table.integer('bopqibzixx');
    table.bigInteger('gauiqwtjrh');
    table.timestamp('bkryrlsjxs');
    table.boolean('yokzpgvate');
    table.integer('cttencksiu');
    table.json('rsteqkreyd');
    table.timestamp('uociaecffb');
  });
  await knex.schema.alterTable('gdkmlrmjfw', function(table) {
    table.boolean('syjvkmojkm');
    table.bigInteger('ygxohyrmbx');
    table.string('rwoevlokev');
  });
  await knex.schema.alterTable('dhzjpflnnt', function(table) {
    table.string('jiqpqeqzps');
    table.text('zeinnvthbs');
    table.timestamp('vxhexryskm');
    table.string('chjewdkjyf');
    table.text('kogyioezli');
    table.integer('uaudvvuwdt');
    table.float('nvwnfqcwip');
    table.integer('kiumjmrjgq');
  });
  await knex.schema.alterTable('gxmktzbczb', function(table) {
    table.bigInteger('kcmksuektm');
    table.boolean('sdlvcojevo');
    table.integer('frwamndzlk');
    table.float('puoubdrwhc');
    table.string('xxupyhvobl');
    table.integer('eepdyxzxsc');
    table.integer('dblehvxgad');
  });
  await knex.schema.alterTable('cplodavzou', function(table) {
    table.boolean('cwbccfhtre');
    table.text('fyumrhdtrh');
    table.float('akszjbpfkw');
    table.float('eublocdydv');
    table.json('ynmpbpmglv');
    table.json('wjlqgiloso');
    table.integer('vnltevbbdz');
    table.boolean('lepiltljob');
    table.bigInteger('xyqhrtkfxx');
  });
  await knex.schema.alterTable('wmfhzrzolm', function(table) {
    table.bigInteger('rludlvwucj');
    table.boolean('gfoqqnrmci');
    table.bigInteger('etiextbeds');
    table.bigInteger('qvtfyhjozw');
    table.bigInteger('aonorcnuus');
    table.timestamp('tkvnphwgyj');
    table.bigInteger('lkxjxlmbbq');
    table.boolean('bmnkyuxjtg');
    table.bigInteger('jhhyvqtrqd');
  });
  await knex.schema.alterTable('lknjgzavqj', function(table) {
    table.text('daqnqigfnd');
    table.float('kemebwfbcn');
    table.integer('yhqozeasad');
    table.json('mowgliopwh');
    table.integer('jhwpgjudsx');
    table.bigInteger('ngjtakmpib');
    table.boolean('kaqujemknd');
  });
  await knex.schema.alterTable('hgedwnuzvx', function(table) {
    table.bigInteger('lbmqmawcdg');
    table.json('upzteuhwwg');
    table.bigInteger('qgtagcytvi');
    table.bigInteger('drglphbduk');
    table.json('lbikztrrai');
    table.float('jhbwsxawjz');
    table.string('cpmiznyrpi');
  });
  await knex.schema.alterTable('mbywxdahct', function(table) {
    table.text('teyxdcgvhq');
    table.integer('pixqmcoycw');
    table.string('edqradqlbr');
    table.integer('lrullfhgce');
    table.integer('eykkphrjzq');
    table.float('srdrysbwpp');
    table.bigInteger('inasptvqbd');
  });
  await knex.schema.alterTable('rkbmtjmoon', function(table) {
    table.bigInteger('qgmmufrloy');
    table.timestamp('cklasinnsy');
    table.string('kizuglckvb');
    table.json('ywawbvokof');
    table.float('mgkyrngcao');
    table.text('tupvdxoojw');
  });
  await knex.schema.alterTable('nicmurqqfn', function(table) {
    table.boolean('vzluvnunas');
    table.boolean('otsfkmudvn');
    table.json('bmuraxcuje');
    table.boolean('zposcjlved');
    table.boolean('sflpaooluh');
    table.integer('xxvswhwisp');
  });
  await knex.schema.alterTable('cecbzwtwcp', function(table) {
    table.json('anadgisjxd');
    table.text('vczoedzzqd');
    table.string('uneqhyygnn');
    table.timestamp('jovttxwbdr');
    table.bigInteger('kjjabvytxf');
    table.bigInteger('hirajuvfxl');
  });
  await knex.schema.alterTable('bmdklelsxi', function(table) {
    table.float('eqxwghtotq');
    table.float('sgjtmasxvo');
    table.integer('urrytpxhcp');
    table.timestamp('yoazofqbmh');
    table.text('scrdkwcfdt');
    table.json('afjuglwwns');
    table.timestamp('wntiijzshf');
  });
  await knex.schema.alterTable('tsqffezwlb', function(table) {
    table.timestamp('cjohgwchif');
    table.text('orhfaeitlt');
    table.json('vrwjaxvpeq');
    table.text('owbswwznno');
    table.boolean('ydjkrflwmy');
    table.string('esmqtkmdsh');
    table.bigInteger('zrgzsnoemg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};