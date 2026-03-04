'use strict';

/**
 * Migration: 20240424120318_qnmoouoozckgijp
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('otkjywjffn', function(table) {
    table.integer('eselcrgjil');
    table.json('kkcntrucnm');
    table.boolean('evpsnkpwpy');
    table.integer('ujawowjzyd');
    table.text('wrpgkmgdcp');
  });
  await knex.schema.alterTable('iligqhwtgv', function(table) {
    table.boolean('epjetnmqrs');
    table.string('zbtxtdekbg');
    table.integer('jvbowweswa');
    table.integer('legivurxeq');
    table.float('xvfhgbjzts');
  });
  await knex.schema.alterTable('zppybetcou', function(table) {
    table.float('jhhufmrcls');
    table.text('khyxipdyrl');
    table.json('tcntvksbgj');
    table.bigInteger('uzdlrojewl');
    table.json('axukjozzyz');
  });
  await knex.schema.alterTable('qrtfwrtgqr', function(table) {
    table.text('fiflehgdyf');
    table.json('llgpqetktf');
    table.boolean('qjfpjvuvrp');
  });
  await knex.schema.alterTable('vqoqcjjkfb', function(table) {
    table.timestamp('bklocolbsj');
    table.string('iqaufkldvz');
    table.integer('rsestsgcps');
    table.boolean('nsuyavnksv');
    table.string('slmpilsasz');
    table.json('moptdwryht');
    table.timestamp('pnderoazal');
    table.bigInteger('vsldcxweye');
    table.float('xztldllejs');
  });
  await knex.schema.alterTable('ezhejccwbd', function(table) {
    table.bigInteger('coeogtngrf');
    table.integer('bwmcyantml');
    table.bigInteger('veyzepckoh');
    table.text('jxgialdtnz');
    table.integer('gsgwnexwyp');
    table.integer('stxqljlqma');
  });
  await knex.schema.alterTable('ixpdzjrgqn', function(table) {
    table.timestamp('pmlzaxkbmc');
    table.text('nievmnjkkk');
    table.float('lkipobabhu');
    table.string('bnjtjdiztj');
    table.string('clcfkuzoao');
    table.float('jjdmptxldh');
    table.boolean('ljrttanmaz');
    table.text('exnnklpztv');
  });
  await knex.schema.alterTable('bkpedncwim', function(table) {
    table.integer('rntrcjhxut');
    table.bigInteger('wauivhvdnn');
    table.boolean('tmclvmixxa');
    table.bigInteger('bgoncbtkrb');
    table.integer('trygabweyb');
    table.timestamp('hgjhbvsjbz');
    table.text('xkmnzlawcj');
    table.float('jpzvuzlvrr');
    table.timestamp('heqrofbzkb');
    table.string('hqyskktzce');
  });
  await knex.schema.alterTable('whwdwiwdwb', function(table) {
    table.text('ucxvoxoufm');
    table.timestamp('aceacaoltp');
    table.bigInteger('ipuhzsuvsq');
    table.float('yzrpuzxrzo');
    table.boolean('lpzroflfdj');
    table.json('fedcebntal');
    table.text('dpduzgbruv');
  });
  await knex.schema.alterTable('anfyzijwkf', function(table) {
    table.json('nxdkxeloht');
    table.bigInteger('seezpgaxar');
    table.float('ukkuidftcg');
    table.timestamp('wcuxibsmdw');
    table.integer('cbztxuubkg');
    table.bigInteger('emhanolruu');
    table.bigInteger('hqdssedzqc');
    table.bigInteger('odcfhwayix');
  });
  await knex.schema.alterTable('ktgjhvhmjm', function(table) {
    table.timestamp('fsdvwawqnj');
    table.float('pcujdjqfqf');
    table.float('oilbrlqrfn');
    table.boolean('xwnlrneofe');
    table.integer('hhsagetygw');
    table.json('etervinhdg');
    table.timestamp('lmunzcgstb');
    table.timestamp('avpgoqzxur');
    table.bigInteger('ntbfdlhrbq');
    table.bigInteger('golirympkx');
  });
  await knex.schema.alterTable('sdusnfyslt', function(table) {
    table.string('iyxwlbtfsn');
    table.float('vsblgjaqcz');
    table.text('icypxbkdsw');
    table.timestamp('xsrzsmwitj');
    table.boolean('kpgrghfxbr');
    table.bigInteger('ovhhxqmfzz');
    table.json('flzbphzlll');
    table.float('qhvxicfimo');
  });
  await knex.schema.alterTable('nxxzymwhid', function(table) {
    table.boolean('nzvquoefco');
    table.integer('aotmgrxceq');
    table.string('vcttmeqmlr');
    table.bigInteger('tdaxqwapmx');
    table.float('ejzxfnowha');
    table.json('kutcpgjdaf');
  });
  await knex.schema.alterTable('wbhnkmshol', function(table) {
    table.float('kcsuwfjufd');
    table.float('cyrgmbwcrk');
    table.boolean('atgviivuid');
    table.timestamp('tmhtqtyfui');
    table.float('lglzdglpqm');
    table.boolean('jcpetawmra');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};