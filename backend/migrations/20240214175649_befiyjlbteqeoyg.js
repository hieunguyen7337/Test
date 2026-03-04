'use strict';

/**
 * Migration: 20240214175649_befiyjlbteqeoyg
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gsdnqltdhb', function(table) {
    table.json('ojkqtckmht');
    table.boolean('egpclnitrm');
    table.timestamp('vmeexckbma');
  });
  await knex.schema.alterTable('ngnegploar', function(table) {
    table.float('ujpmwqrfpu');
    table.string('xjirktjkar');
    table.boolean('pdpkglrmyp');
    table.boolean('kpyxnqjrek');
    table.text('uhtfzsgbbl');
    table.bigInteger('jxitxnemdb');
    table.timestamp('jhmdesymbr');
    table.float('hgooohuvit');
    table.integer('mbdtxeospi');
  });
  await knex.schema.alterTable('itrldaflrt', function(table) {
    table.text('srqymdtqsu');
    table.bigInteger('jcwwepxwsj');
    table.bigInteger('mrjvwldtun');
    table.integer('cxjusroewk');
  });
  await knex.schema.alterTable('sfvzqtyoof', function(table) {
    table.string('cuxterqcwd');
    table.bigInteger('cpzryrzvlv');
    table.json('dstiawyrgy');
    table.timestamp('combctgihy');
    table.text('itupnlyrdk');
    table.boolean('suzxkjvnlb');
    table.timestamp('rbsjzdqbua');
    table.float('ejcrpazbaf');
  });
  await knex.schema.alterTable('zdcsxooamo', function(table) {
    table.text('qurzgcalnp');
    table.integer('ishswmlpdl');
    table.integer('dmzulvauzc');
    table.integer('ysuhxqeepz');
    table.float('mnpctixilt');
    table.boolean('heuxwotsia');
    table.string('nvstsyhmqs');
    table.json('qfsuapruxy');
  });
  await knex.schema.alterTable('gtlemljijs', function(table) {
    table.float('rqbigndvdx');
    table.timestamp('zcoxlrmiuw');
    table.boolean('kegebvzgwp');
    table.timestamp('qlbjgzopyo');
    table.integer('lvgwbxfoam');
    table.integer('ihkmadmhjm');
  });
  await knex.schema.alterTable('wurcpffzuo', function(table) {
    table.bigInteger('qejdyvphlp');
    table.boolean('nuxdqnmujf');
    table.float('ziyqyjrobw');
    table.timestamp('ardgnvjfek');
    table.integer('wzuklsmrjh');
    table.timestamp('nxcdowvlir');
    table.float('dvcjunsalk');
    table.boolean('immqduaayt');
    table.timestamp('yxexhvybdy');
  });
  await knex.schema.alterTable('jxfnbuhsoy', function(table) {
    table.bigInteger('nudexpwscn');
    table.float('inpamnmoly');
    table.float('gcilccrlwq');
  });
  await knex.schema.alterTable('abjchfyhaz', function(table) {
    table.bigInteger('jnnpewgeva');
    table.timestamp('qachyksdts');
    table.text('ofdvkgdhlo');
  });
  await knex.schema.alterTable('sfsjbjenje', function(table) {
    table.boolean('oajkxsixwp');
    table.json('nlxoubrpfb');
    table.bigInteger('riykigpwbc');
    table.timestamp('vosxzhvlwk');
    table.integer('zgknsafxdn');
    table.timestamp('estvkjqlry');
  });
  await knex.schema.alterTable('iasdhvjdoc', function(table) {
    table.string('ojehclyirx');
    table.bigInteger('wfvmelqocy');
    table.bigInteger('fajlplrvqh');
    table.timestamp('pdvldhpkow');
    table.boolean('rrvbqrvhzh');
    table.float('gzjmdmszfk');
  });
  await knex.schema.alterTable('siqupzwogx', function(table) {
    table.bigInteger('aogquoalsk');
    table.string('udbqdsdqrw');
    table.text('gzatcwcktw');
    table.bigInteger('hfrmnqofqd');
    table.json('xobjrbvfyr');
  });
  await knex.schema.alterTable('rjnvhbensq', function(table) {
    table.string('bjjkyszrsz');
    table.boolean('cirpslmdtb');
    table.boolean('woaraytrfj');
    table.float('idfzdtrwxw');
    table.json('punaxcvacn');
    table.text('igvxxcmijf');
    table.float('xadricgshe');
    table.bigInteger('jqxcitsejy');
  });
  await knex.schema.alterTable('dqmijtijgc', function(table) {
    table.text('zyrllcvvzq');
    table.string('nfjzaobxbz');
    table.string('qcqdtjxwir');
    table.json('vggawukddt');
    table.json('perjgxugxn');
    table.integer('dvtylswrqk');
    table.bigInteger('kxcoqmcvyy');
    table.float('qrltujapwu');
    table.string('rxshnuhzyp');
    table.json('cijstybjks');
  });
  await knex.schema.alterTable('cbnwuretaq', function(table) {
    table.text('qwscotofih');
    table.text('nahvjciimr');
    table.string('oocesyobfm');
    table.json('qyrjntvcod');
    table.text('jszskjamgd');
    table.boolean('jheqianqet');
    table.boolean('lzavydxoeq');
    table.json('jlpbrvpncj');
    table.json('ufpjzvgtbo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};