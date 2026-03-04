'use strict';

/**
 * Migration: 20240713075100_jomtyzpbsysrsus
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iixlkbvzdc', function(table) {
    table.bigInteger('rjduniclli');
    table.float('mhgoctqyvi');
    table.json('jkadbptmpr');
    table.bigInteger('lhpaxsyxmp');
    table.text('azqoduypgf');
    table.float('zjeafmbryt');
    table.boolean('moasitctoi');
    table.text('sykvgqhdbk');
  });
  await knex.schema.alterTable('tizzrpwprz', function(table) {
    table.boolean('ridqvkhfgp');
    table.boolean('vzvawgfuzy');
    table.float('peygyluiqa');
    table.json('yiwlhpqqmq');
    table.bigInteger('mlbftxajkf');
    table.text('iqiitmsfgv');
  });
  await knex.schema.alterTable('cmakfiszpr', function(table) {
    table.string('mqsnadtvcp');
    table.float('zwpwmptikd');
    table.boolean('zefjwzhais');
    table.string('pfaqgwjaac');
    table.string('shjxgwgymg');
    table.float('kvttjihjwi');
    table.bigInteger('pthzyuyvgc');
    table.string('gxqhwnrjst');
    table.json('marfzwhklb');
    table.bigInteger('nspvjfbzqj');
  });
  await knex.schema.alterTable('mfajpxddib', function(table) {
    table.string('uhkjeaoelr');
    table.text('eqxbpqodim');
    table.integer('nlhnzslxvc');
  });
  await knex.schema.alterTable('zjsbobsdzp', function(table) {
    table.integer('kkhebehhsg');
    table.json('inahkgpxde');
    table.string('dkazmjygoz');
  });
  await knex.schema.alterTable('fkhhnhhyba', function(table) {
    table.timestamp('odqdxrazgi');
    table.float('jaqtcefwvz');
    table.float('kpiikduejc');
    table.string('dznjtdjhqn');
    table.bigInteger('zcepgdmmiw');
    table.bigInteger('uspvpzwqpg');
  });
  await knex.schema.alterTable('fxjjlshpkl', function(table) {
    table.integer('pwddfrvyqd');
    table.bigInteger('inhcbobapm');
    table.json('xdqguefpfx');
    table.bigInteger('pzcwtoafrk');
    table.text('samggbseew');
    table.integer('uikyrhbbzt');
    table.timestamp('wzwdnbbwdx');
    table.timestamp('tkoznoukex');
    table.integer('adfufuxbex');
  });
  await knex.schema.alterTable('edtxwrdmen', function(table) {
    table.bigInteger('qnxnrevldw');
    table.json('tgqqaoicya');
    table.float('iuabmzxajz');
  });
  await knex.schema.alterTable('habfftdcda', function(table) {
    table.timestamp('xzyblplmmh');
    table.boolean('ovomuvhajq');
    table.timestamp('smcowduuul');
    table.string('bxikbeqrcb');
    table.bigInteger('aoucsaacub');
    table.text('dfnzaruojc');
    table.boolean('eziypxmcyy');
    table.timestamp('zdyoivuwdn');
    table.bigInteger('qjrikxxust');
    table.boolean('gayjiwtwwk');
  });
  await knex.schema.alterTable('ssvhlixbjb', function(table) {
    table.string('hmnnpxwbmm');
    table.integer('kjsqngycsf');
    table.timestamp('irtoizjfid');
    table.float('vrqobafjlw');
    table.float('zhwtdtlypa');
    table.string('idnckzocma');
    table.bigInteger('zrosstktwx');
    table.string('qwjmktdhwh');
    table.bigInteger('cacydakdsj');
    table.bigInteger('qfgiotopam');
  });
  await knex.schema.alterTable('vqvozrodqu', function(table) {
    table.json('stmlybatam');
    table.string('qzgopyvuxq');
    table.float('lasrwetduu');
    table.float('ujsmkjdone');
    table.timestamp('ohynuilxje');
    table.string('krrhqhuuxl');
    table.float('srgvjfqmxm');
    table.timestamp('nfbbrlinyl');
    table.json('jwjgxiaket');
    table.timestamp('dvvanykhhk');
  });
  await knex.schema.alterTable('lcvbnpwrtv', function(table) {
    table.boolean('frvlwxxxjj');
    table.bigInteger('jmdwdwvjth');
    table.string('gpqmcuvrbl');
    table.bigInteger('vmullifelu');
    table.text('btqinvpbjl');
    table.bigInteger('dvdhszugwr');
    table.string('adwnkhrhoi');
  });
  await knex.schema.alterTable('illylmklzm', function(table) {
    table.bigInteger('xsdsfflrjv');
    table.json('oogytrqpox');
    table.boolean('inrrptknjz');
    table.timestamp('swtbfbfbmn');
    table.bigInteger('iabcmimwhp');
    table.bigInteger('zwflhjgvph');
    table.string('qrhjjqmjku');
    table.string('fdsvgsfagt');
  });
  await knex.schema.alterTable('ctaijsstsp', function(table) {
    table.bigInteger('dufzirjfrn');
    table.integer('ciidtdsdby');
    table.bigInteger('hjmhosqfil');
    table.text('wswoyzvomi');
    table.bigInteger('borlljdfsf');
    table.boolean('csasibclgu');
    table.timestamp('xzgldtexkb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};