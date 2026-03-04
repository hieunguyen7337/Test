'use strict';

/**
 * Migration: 20240328200846_cyfzzustgkdemec
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jewzdzqsjm', function(table) {
    table.string('hfffspspxx');
    table.float('ktvzapymmd');
    table.boolean('ztwsasolyr');
    table.boolean('yfvfrggbqf');
    table.integer('fmyrczjror');
    table.text('rrbqzragqu');
  });
  await knex.schema.alterTable('qauekvlrce', function(table) {
    table.boolean('mseyogtxlp');
    table.boolean('tggypgeasv');
    table.float('lhaixeqxyt');
    table.bigInteger('ttoqfhbjtr');
    table.timestamp('nqmgogkthm');
    table.text('wdccxvqjom');
    table.timestamp('rgacnqdxav');
    table.bigInteger('aizrhhcsad');
    table.boolean('ttfbpcnktk');
  });
  await knex.schema.alterTable('idyarzchmy', function(table) {
    table.string('cpjfzcilcr');
    table.timestamp('djpgriqoka');
    table.boolean('nplombvnrr');
    table.bigInteger('qxkmgithvu');
    table.bigInteger('yfnudbrngj');
    table.float('vkpdvrbxsb');
    table.bigInteger('qwkbgsurbz');
    table.json('ugapzhbegn');
    table.text('bmuqzskbyu');
  });
  await knex.schema.alterTable('frmyvfbxri', function(table) {
    table.text('jqkhrctqbn');
    table.string('tzvcpyytmt');
    table.timestamp('qabfygroyg');
    table.bigInteger('zkvpuxecoh');
  });
  await knex.schema.alterTable('oibbplbhum', function(table) {
    table.json('xcbihbdhgi');
    table.text('swodihaddc');
    table.text('yugptywxfj');
    table.string('amjywwktse');
    table.text('kxoxbztgza');
    table.text('lrensdfgfr');
    table.text('qoqbwkxjkz');
  });
  await knex.schema.alterTable('pfyxvalbnq', function(table) {
    table.string('ihtwvelyga');
    table.text('midxanqinv');
    table.float('udzepunlrz');
    table.float('zmjahyognz');
  });
  await knex.schema.alterTable('uretmbkfgk', function(table) {
    table.string('nlvcksbowv');
    table.integer('mwsabthyru');
    table.integer('atfyercdud');
    table.float('swhslmxjnh');
  });
  await knex.schema.alterTable('wzqukmnfrn', function(table) {
    table.boolean('wazscvqaic');
    table.text('fgdexojdhi');
    table.bigInteger('gqznfsmgmy');
    table.json('hdjppyogto');
    table.json('jsxrsigqbc');
    table.timestamp('udooxzoooi');
  });
  await knex.schema.alterTable('egisamrxoa', function(table) {
    table.text('hpplhrmhwi');
    table.bigInteger('fkfkqpecni');
    table.float('xnuylrwezw');
    table.boolean('wzytrqyhjh');
    table.timestamp('lflarlboeo');
    table.string('jnnybjqifn');
  });
  await knex.schema.alterTable('wtlhcajuun', function(table) {
    table.bigInteger('lseaiqcame');
    table.float('vbgwgdagmy');
    table.integer('lqlybffrfj');
    table.string('ursfchdavj');
    table.integer('lvpvcjasyu');
    table.string('glbbytlwel');
    table.text('oxftyyyqzf');
    table.json('cyillubydr');
    table.boolean('vgmukhctuz');
    table.boolean('ygkagijxny');
  });
  await knex.schema.alterTable('glortmrezz', function(table) {
    table.float('aswbgtkszz');
    table.string('zccvxcohpc');
    table.integer('mjcnvxkisn');
    table.json('xqnyvtvlfb');
    table.bigInteger('ioqczgpfae');
    table.bigInteger('jqatxggkcs');
    table.integer('ehvcfevkfq');
    table.timestamp('ovxiuyekzv');
  });
  await knex.schema.alterTable('ibzztfhexx', function(table) {
    table.timestamp('luwtqbvvzs');
    table.json('yphfdyhfkb');
    table.timestamp('jedhqjerhh');
    table.boolean('eezzaogfmx');
    table.bigInteger('vttnlfsllx');
    table.float('lmnmsxebzw');
    table.text('uohhiozzry');
    table.text('etoquhmvtd');
    table.boolean('tscldpvtfe');
  });
  await knex.schema.alterTable('kpnstcuxiq', function(table) {
    table.json('kcsjefihox');
    table.integer('tdsammuzia');
    table.timestamp('nhyndowfsg');
    table.timestamp('gqibhaxvep');
    table.json('oaqlnkqvzh');
    table.bigInteger('wosazqjwzq');
  });
  await knex.schema.alterTable('panwtbjoou', function(table) {
    table.timestamp('bfsxkpumqs');
    table.text('kadtblwsgh');
    table.boolean('ujaqxovnpn');
  });
  await knex.schema.alterTable('admfshazxq', function(table) {
    table.string('dbxxfvtxks');
    table.bigInteger('pfpupiezhu');
    table.string('vccaltbzpx');
    table.integer('nfoprxichm');
    table.text('ipsimrvtsl');
  });
  await knex.schema.alterTable('laxzhpdcms', function(table) {
    table.json('plmbjzqkko');
    table.integer('wvzkrewiof');
    table.timestamp('maeniounco');
  });
  await knex.schema.alterTable('zqgeympusk', function(table) {
    table.float('qrabeexfuo');
    table.integer('qktoohjkep');
    table.string('utpzqxaxul');
    table.float('xlbmxjcuac');
    table.bigInteger('zyvwpcsxqr');
    table.integer('zakgvngejs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};