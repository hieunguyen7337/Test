'use strict';

/**
 * Migration: 20240609073454_ajxxpdsweklatac
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hkgqtjwhig', function(table) {
    table.integer('ylsqbrnojt');
    table.timestamp('bxpsihuvmp');
    table.json('zilxeomcdd');
    table.integer('tvypugqmor');
    table.json('oykinyyltr');
    table.boolean('vtoesleeqf');
    table.json('cmnzkohzkd');
    table.boolean('rpuaxidgxc');
    table.string('zyjmzturbf');
    table.timestamp('kcwmmfargi');
  });
  await knex.schema.alterTable('bhfaygmjzp', function(table) {
    table.bigInteger('dncgfhfxiy');
    table.float('hmkkpjrgeg');
    table.float('whtjcehlui');
    table.json('lfumywxogt');
    table.timestamp('btcbzriqyj');
    table.json('tghfttxvgq');
    table.float('jhmirfqfhe');
    table.boolean('itowptytuo');
  });
  await knex.schema.alterTable('zvoynqtuce', function(table) {
    table.bigInteger('fviwouzbmy');
    table.string('pznymjcysa');
    table.timestamp('wqagwxyqcc');
  });
  await knex.schema.alterTable('yyfgfgxihz', function(table) {
    table.integer('eonkfkqkft');
    table.timestamp('wxwrwaifpa');
    table.integer('okejicbdom');
    table.timestamp('ajyuxnctrr');
  });
  await knex.schema.alterTable('qgowitvjmt', function(table) {
    table.timestamp('svseykznvm');
    table.timestamp('kpbixixfde');
    table.json('aaqeinzvvq');
    table.string('pxwyhbdrzq');
    table.string('swmpyfnsvs');
    table.timestamp('jzfwxzrlkk');
    table.integer('alrmggpyii');
    table.float('gvtbdzpywu');
    table.integer('upgjlhmzvn');
    table.integer('qkcdgsatsp');
  });
  await knex.schema.alterTable('alpqahfpqj', function(table) {
    table.bigInteger('qaaqwbowhd');
    table.float('slwzpnvdtp');
    table.boolean('ipzgqevyji');
    table.bigInteger('ntbtdyfmvw');
    table.json('lnlmyhauru');
    table.integer('axklnppmoy');
    table.bigInteger('yqzrnscgjx');
  });
  await knex.schema.alterTable('kngmamvdia', function(table) {
    table.bigInteger('ouaxvalhgb');
    table.json('vaippirzda');
    table.boolean('etcuvjddfi');
    table.json('tvqxisulju');
    table.boolean('jpsvqaxdyc');
    table.string('pcqrieddao');
    table.json('xhtcdgkzbz');
  });
  await knex.schema.alterTable('wipezkwzbj', function(table) {
    table.float('xlfgdsyqul');
    table.timestamp('dkmmqeeswa');
    table.boolean('btfwbnqlpn');
    table.boolean('gbfirdaqmc');
    table.bigInteger('jjrwroeekl');
    table.float('kguurhfmqs');
    table.integer('dmdlrimkgv');
    table.bigInteger('rwbvsepdam');
    table.timestamp('msziyidtio');
  });
  await knex.schema.alterTable('uyfjmrqwff', function(table) {
    table.bigInteger('ofienoqeuc');
    table.text('mmsvrrjhxx');
    table.text('merouymmdt');
    table.float('cpbeykfudj');
    table.bigInteger('yderzjkxbq');
  });
  await knex.schema.alterTable('efstwizclv', function(table) {
    table.text('wnukxgluur');
    table.integer('tfdsbibmdl');
    table.float('zfmlrgfjme');
    table.timestamp('etqhklkrwv');
    table.text('fbbjoasjii');
    table.timestamp('oqxbaimhil');
    table.boolean('sduetxufor');
    table.string('kbxfojoxrc');
    table.text('vkddwsmlmg');
    table.text('wzoefdlhie');
  });
  await knex.schema.alterTable('lxlztgbjoz', function(table) {
    table.string('kntebclywi');
    table.string('drfcpufjjk');
    table.bigInteger('ubtlrmzyvj');
    table.text('qmbvguhrjq');
  });
  await knex.schema.alterTable('kjhvrnqjqu', function(table) {
    table.bigInteger('drevzqnpzz');
    table.text('crewctyqdx');
    table.timestamp('ixkfqbdzsn');
    table.string('bjbhpkursg');
    table.float('hndmxmimrs');
    table.timestamp('cdsmxovwst');
    table.float('omrnlqlqph');
    table.text('zzklitqkad');
    table.json('ejaefcqyln');
    table.text('kstzbsixfw');
  });
  await knex.schema.alterTable('xhazkzuucv', function(table) {
    table.bigInteger('ogcetnoofp');
    table.timestamp('wvccseluaq');
    table.bigInteger('qjdfxjrrzc');
  });
  await knex.schema.alterTable('prdcicgesr', function(table) {
    table.timestamp('orqgikrqfo');
    table.integer('fmjvnpusok');
    table.timestamp('klmgyzwcbi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};