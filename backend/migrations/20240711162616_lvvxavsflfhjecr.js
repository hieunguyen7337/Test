'use strict';

/**
 * Migration: 20240711162616_lvvxavsflfhjecr
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gdqkvlbgyd', function(table) {
    table.timestamp('atzzdgvxny');
    table.json('ucoagimqsi');
    table.boolean('ymtlgkygto');
    table.timestamp('hutnwfycqs');
    table.string('rncbdbwhgz');
  });
  await knex.schema.alterTable('jzyugaxnen', function(table) {
    table.boolean('qumjqcmvti');
    table.float('gragcoqkbk');
    table.string('dzlxlajouw');
    table.float('avldfkqmhu');
    table.float('kxmvbyhxfl');
    table.bigInteger('xgbocgfssq');
    table.integer('pxcjtmvqkz');
    table.json('xfidsypkbj');
  });
  await knex.schema.alterTable('nboredujfz', function(table) {
    table.timestamp('xbkaijdpas');
    table.float('affyccksmk');
    table.text('ftgaylpyfw');
    table.integer('thtliabiwc');
    table.float('didufyycml');
    table.integer('ukkctpfifc');
  });
  await knex.schema.alterTable('butfcczmsp', function(table) {
    table.boolean('xgyxvnbaii');
    table.bigInteger('bokmenqliz');
    table.timestamp('hdhvnbvrtg');
    table.string('zbfyjqhrwc');
    table.timestamp('gvjhkqkbnc');
    table.string('kcvmtweoff');
    table.boolean('tekpuxepvs');
    table.float('zumzxoekou');
    table.bigInteger('ynebmqqldx');
    table.json('rodwytrrac');
  });
  await knex.schema.alterTable('beqfopfpwk', function(table) {
    table.text('tzkgyslhnh');
    table.json('nxoplwafxw');
    table.timestamp('bsjmmjbjce');
    table.text('kgfwbwospr');
    table.boolean('gjfphfiyho');
    table.boolean('bzqooapure');
    table.boolean('eqgwxqpeiz');
  });
  await knex.schema.alterTable('vxhcgezxmr', function(table) {
    table.integer('gwtugutgor');
    table.bigInteger('zhokmrezue');
    table.string('xorfaayiho');
    table.integer('dwsqrsmqyl');
    table.string('kxvvhazafj');
    table.string('pzpzptxqad');
    table.boolean('vsvizhkmjg');
    table.timestamp('owapnypraz');
  });
  await knex.schema.alterTable('cfphsnyqmg', function(table) {
    table.json('ngsvltvhgv');
    table.text('zunmkpocvc');
    table.boolean('vjjaksbeqf');
    table.json('xzelnffkam');
    table.text('uedvtciidx');
    table.timestamp('vtactgutdl');
    table.integer('tnzxgjseqa');
    table.text('xgvtxhhxse');
  });
  await knex.schema.alterTable('ragzvoyhso', function(table) {
    table.integer('xvgngdbhhc');
    table.integer('ucncovqxvi');
    table.float('tnboajqgpu');
    table.string('jaksbknesu');
  });
  await knex.schema.alterTable('sxmnisextr', function(table) {
    table.timestamp('npsvxskyzz');
    table.float('rxxdwxcuvz');
    table.float('hxgnlgdxia');
    table.string('kkwvazrwyo');
    table.integer('jmdnhnswcs');
    table.json('bjqqttwxmx');
    table.integer('wzravzoxse');
    table.bigInteger('pfsjbtijaz');
    table.boolean('ijivpebiuq');
  });
  await knex.schema.alterTable('kqjlbtwtde', function(table) {
    table.text('jpzcgxavpz');
    table.text('lfpsnttjeg');
    table.timestamp('tyojedvfvq');
    table.string('qbqzmdriyo');
    table.timestamp('cxpdrgwztn');
  });
  await knex.schema.alterTable('lrjggfnuoz', function(table) {
    table.integer('edeygtndqv');
    table.string('jwmirifgfe');
    table.timestamp('nzpuzfptvz');
    table.string('qsxcrfjvto');
    table.json('wpltpvqpiv');
    table.string('rcaucsozxi');
    table.integer('zrkuokphni');
    table.float('eodcgeyqvc');
    table.string('aqtprcenwi');
    table.timestamp('xbimeagigl');
  });
  await knex.schema.alterTable('ukekpulrte', function(table) {
    table.timestamp('cowmmhwybh');
    table.string('wlthsdrgms');
    table.string('mefyjmmruu');
    table.timestamp('ulehdofzky');
    table.integer('cpdjvginpu');
    table.json('lclprnhagt');
    table.timestamp('sgwbuakcdn');
    table.float('lhhycfriam');
  });
  await knex.schema.alterTable('siiwdenxbk', function(table) {
    table.json('vkvggvnjxy');
    table.float('symryzpvsf');
    table.text('jlaphrnmrv');
    table.text('eajuduojwj');
  });
  await knex.schema.alterTable('yebtsgyqql', function(table) {
    table.bigInteger('qdkboacqpu');
    table.text('amyanropgo');
    table.timestamp('ltikggwtov');
    table.boolean('vxjgcoqxvu');
    table.text('knxxiprtrt');
    table.text('yashdsrseo');
    table.float('slaqujpjft');
    table.boolean('mwltcwapmd');
    table.boolean('bdiswvklmc');
  });
  await knex.schema.alterTable('hzkapvnrui', function(table) {
    table.string('pbbpcefwck');
    table.json('rqveudfimt');
    table.boolean('zuhgiohxdk');
    table.bigInteger('nfkzixizsp');
    table.json('liurprsisi');
    table.bigInteger('rdzfxwrlct');
    table.string('bztlduwauq');
  });
  await knex.schema.alterTable('kumndelqcj', function(table) {
    table.timestamp('cohqwfdpea');
    table.timestamp('yaixfhzgrh');
    table.string('egkzjmamcz');
    table.bigInteger('sgoloeipjh');
    table.float('lqlvkuglxb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};