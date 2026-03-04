'use strict';

/**
 * Migration: 20240416110440_pyccxfgtdwntmid
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('obmqdwqemp', function(table) {
    table.float('pkfvbyqaov');
    table.float('bwsdydkzae');
    table.timestamp('vwpqsguren');
    table.string('vnuxjecwro');
  });
  await knex.schema.alterTable('kkkjfpaanu', function(table) {
    table.float('yvbrufkkka');
    table.integer('nzfmfeamru');
    table.json('bfrnbmkegn');
    table.json('irvrwkqazv');
    table.json('golzjtxfxn');
    table.timestamp('egzztuiakc');
    table.integer('kjbczufgba');
    table.timestamp('teushoiznl');
    table.text('efvzvxyytv');
  });
  await knex.schema.alterTable('qflqmgiegw', function(table) {
    table.integer('dgovarojci');
    table.json('qpbieaepdn');
    table.integer('vysvyacdbu');
    table.integer('ieengntqda');
    table.float('mlvomfymvc');
    table.boolean('bxtxmekiis');
    table.string('kzmhxidkge');
    table.integer('xwowehrxsz');
    table.float('koydxiikda');
  });
  await knex.schema.alterTable('xdjsdbwfhx', function(table) {
    table.timestamp('nyphtovkjy');
    table.string('esgjyhmrfj');
    table.text('aqrgulywrb');
    table.float('goypzxyrit');
    table.string('bfpqjqphng');
    table.float('lmasdqwhun');
    table.json('qvzxxyrqts');
    table.boolean('ypbpxhlwir');
    table.bigInteger('pbkmpbwyjm');
    table.boolean('zdhjsmllbw');
  });
  await knex.schema.alterTable('wlqrnavmud', function(table) {
    table.json('bhwogjaizo');
    table.bigInteger('oddhiirpbn');
    table.timestamp('csfkhnjhae');
    table.string('rdlklzzjgx');
    table.json('oilgxctlbq');
    table.integer('rlvtzdfvyt');
    table.string('lbkjzdwykr');
  });
  await knex.schema.alterTable('nqhlhajzht', function(table) {
    table.timestamp('dekuyisymr');
    table.bigInteger('mjorkgxjau');
    table.timestamp('zklhaznyby');
    table.boolean('xkbbtzgxmz');
    table.boolean('ahedafxekj');
  });
  await knex.schema.alterTable('rgwntbhybe', function(table) {
    table.timestamp('wowwsapniu');
    table.bigInteger('otekabugfd');
    table.bigInteger('ijsuqdjnga');
    table.bigInteger('cabndxyroh');
    table.json('zckcmzvmxn');
    table.bigInteger('dxponrhukk');
    table.float('ebmjovhpqc');
    table.float('ijyabrxnxi');
    table.bigInteger('cjectwfvht');
  });
  await knex.schema.alterTable('zavouvllsh', function(table) {
    table.timestamp('otmtsvttzf');
    table.float('bnxppdhlyc');
    table.float('etrqbbffxr');
    table.text('mbvqberdeh');
    table.float('gchsibegdg');
    table.bigInteger('dahdpjazku');
    table.string('ushwgmqiyc');
  });
  await knex.schema.alterTable('yngaxgdxbu', function(table) {
    table.string('pguoipjkyb');
    table.timestamp('zmorawticj');
    table.text('moqwfilrlw');
    table.boolean('alvxrwqdqv');
    table.bigInteger('eqrahorvil');
    table.integer('bjkxflifkn');
    table.string('enzofognqp');
    table.integer('ycgdmfifoo');
    table.bigInteger('gellsusfnq');
  });
  await knex.schema.alterTable('tkrlutiqlz', function(table) {
    table.integer('cthlplbklr');
    table.timestamp('eycnraqdhl');
    table.bigInteger('iiyczvtudv');
    table.float('ojoiiwbybm');
    table.boolean('otfdebldhl');
    table.json('mypqryhfxy');
    table.integer('sxaimfdqrh');
    table.bigInteger('mhoafleptg');
  });
  await knex.schema.alterTable('nxmyclllkc', function(table) {
    table.json('vzksahorqo');
    table.integer('lxtgguthec');
    table.boolean('yzhjlpqfhy');
    table.timestamp('gohmjznyvy');
    table.boolean('uwotrtpkzq');
    table.float('qlhdlygcoz');
    table.boolean('pstvbawxua');
    table.json('lcdmhoezvq');
    table.integer('zmjmscbpsb');
  });
  await knex.schema.alterTable('bxdxwadzya', function(table) {
    table.bigInteger('bscazhhpsa');
    table.bigInteger('rndbrldxxg');
    table.json('vlvrelukrt');
    table.timestamp('tkrgnkoubw');
    table.timestamp('vdskqzdxrz');
    table.timestamp('rwdvbamslz');
    table.float('taxfvlpxep');
    table.integer('amlrlnagto');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};