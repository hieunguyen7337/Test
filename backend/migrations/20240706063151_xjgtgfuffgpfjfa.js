'use strict';

/**
 * Migration: 20240706063151_xjgtgfuffgpfjfa
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ngdutgbeuq', function(table) {
    table.json('hftkerwhwr');
    table.bigInteger('qlmdjylvxx');
    table.bigInteger('bsosojvvap');
  });
  await knex.schema.alterTable('kjqmdttlec', function(table) {
    table.bigInteger('qwfckczbtm');
    table.float('cjwtmpwwvp');
    table.bigInteger('bepejrznus');
  });
  await knex.schema.alterTable('advtzavqer', function(table) {
    table.string('tabbyprbgx');
    table.float('ueoogjzotk');
    table.json('fwdlfvytvo');
    table.float('vovsjyodfl');
    table.timestamp('cjchdljkat');
    table.text('berdslexsy');
    table.bigInteger('chfrhsbtti');
    table.json('lylprpoblr');
    table.string('dohnlqxxbp');
  });
  await knex.schema.alterTable('puhgqcspyp', function(table) {
    table.json('wgodqjzche');
    table.string('fumcxhhcod');
    table.json('cexhygsyjq');
    table.text('lsjqpvmmnb');
    table.timestamp('mtbkhnwugo');
    table.integer('fkeopyxqqi');
    table.string('ddyfwztdzo');
  });
  await knex.schema.alterTable('tdejxxowol', function(table) {
    table.bigInteger('tvarlxabcx');
    table.boolean('gfrpprhcib');
    table.bigInteger('hxxlpgjluc');
    table.integer('aficncvaen');
    table.bigInteger('rcwfgcskmg');
  });
  await knex.schema.alterTable('pvymypkusa', function(table) {
    table.json('wdyrszyfnr');
    table.float('iuqusgvmbl');
    table.text('rpvukqkysf');
    table.timestamp('dszzfixujn');
    table.float('yfsmqtimdl');
    table.boolean('yjpricrhcy');
    table.json('ukqqjulmky');
    table.string('wmolmvpisa');
    table.timestamp('qzchpyecgs');
    table.text('xmgbogolls');
  });
  await knex.schema.alterTable('yekefnahfv', function(table) {
    table.json('iodxigbxfu');
    table.string('lluspbazfr');
    table.json('diqlmvehhp');
    table.json('uppkxywxvc');
    table.json('wrwdeqicas');
    table.text('cixqsiuwzo');
    table.text('anydnphylt');
    table.json('jmtwinnlek');
    table.string('ljapkediqe');
  });
  await knex.schema.alterTable('dkfaknchrg', function(table) {
    table.float('yegqzbpzvh');
    table.boolean('cyuewwmkuc');
    table.float('aaelfjzvvr');
  });
  await knex.schema.alterTable('pjnodweisu', function(table) {
    table.bigInteger('qwrddaedwm');
    table.json('eukpmrxcrt');
    table.float('rjzypnqfaj');
    table.json('dpxbsxpbzv');
  });
  await knex.schema.alterTable('zlmstignxd', function(table) {
    table.timestamp('tfjhubutav');
    table.timestamp('sbqxdkfhdh');
    table.boolean('byhstrbarm');
    table.bigInteger('ngraltipws');
    table.float('haupgiteae');
    table.boolean('sdtfxxjrvx');
    table.text('zygpnvjofg');
  });
  await knex.schema.alterTable('capfoptrwx', function(table) {
    table.timestamp('cwiyzrgzzc');
    table.bigInteger('aeqyafbgir');
    table.string('wwwjywxywa');
  });
  await knex.schema.alterTable('wessrfsjci', function(table) {
    table.text('cghyminmak');
    table.text('ailxejfnfm');
    table.boolean('vpdhaxqsja');
    table.string('ddojswsnjw');
    table.json('bkfjqhuyjw');
  });
  await knex.schema.alterTable('mxpqyiwuaf', function(table) {
    table.boolean('ltonnnunxw');
    table.text('qlnrtnbjyw');
    table.json('sedyifbrgf');
  });
  await knex.schema.alterTable('gxkkeezxiu', function(table) {
    table.text('jxffbtjyqe');
    table.bigInteger('mfedygpdnz');
    table.json('smhrhmtgpj');
    table.float('hjrbusvzdu');
    table.integer('wiwtoflkdn');
    table.integer('kuslvbvmtr');
    table.boolean('vrhheocyhe');
    table.timestamp('btudwgpqla');
  });
  await knex.schema.alterTable('nqjsgbxtxs', function(table) {
    table.integer('wlgtckrntd');
    table.boolean('lwnssgflqn');
    table.text('axoazzjrgg');
    table.bigInteger('dwppexwomt');
    table.json('wjnmsntudn');
  });
  await knex.schema.alterTable('hjnobamlpi', function(table) {
    table.bigInteger('mbloqmexoe');
    table.bigInteger('llcxayajcv');
    table.string('kbqevtbuac');
    table.string('ejufdbdlax');
    table.string('dmgcnzuauv');
    table.boolean('dkubbhqshv');
  });
  await knex.schema.alterTable('zrxdecmgqm', function(table) {
    table.timestamp('jvxzycfbqq');
    table.boolean('xvofyrohpg');
    table.timestamp('kopijkynye');
    table.bigInteger('mqnwuscftd');
    table.integer('jfxpjudmsq');
  });
  await knex.schema.alterTable('wicoynxasj', function(table) {
    table.json('hafaxaovtf');
    table.integer('ihjdnunlfw');
    table.bigInteger('zvxpgqqjev');
    table.float('kvwozwdwet');
    table.float('aighyhnbuo');
  });
  await knex.schema.alterTable('newkjbxpew', function(table) {
    table.integer('pusskvcweb');
    table.float('jtitvubewh');
    table.float('hudkenbvmh');
    table.integer('elvxetvxpi');
    table.text('lywwboonyy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};