'use strict';

/**
 * Migration: 20240725204426_cawxiumhoosytde
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wnyypmzzna', function(table) {
    table.timestamp('ltaecoyjye');
    table.text('bpqfviwdxc');
    table.integer('tqgchrxsve');
    table.timestamp('ypgyrsfhsx');
  });
  await knex.schema.alterTable('dhfxantfqy', function(table) {
    table.text('cfewtukloi');
    table.text('cuycupulqo');
    table.string('zgzlmyldsi');
    table.text('gqtlaekrvg');
    table.integer('dwbxdpbied');
    table.string('sjbzklhoqa');
    table.boolean('vmikfxorfa');
    table.float('jlnunyhxga');
    table.boolean('whystcdado');
    table.timestamp('xsjuiuaiam');
  });
  await knex.schema.alterTable('hiclqzfdhs', function(table) {
    table.integer('trxsshjjax');
    table.boolean('ubhhmvcrgk');
    table.float('mhkxwerrwj');
    table.float('qdjehcuuez');
    table.bigInteger('kwtvazgyyn');
    table.boolean('ahonujblhm');
    table.bigInteger('frqjvkxiia');
  });
  await knex.schema.alterTable('gxbcbxjpqs', function(table) {
    table.text('denzaufgem');
    table.string('lpmjrudzcr');
    table.boolean('exefwgvxul');
    table.json('sycplhbxgd');
    table.bigInteger('xhsdusbdqa');
    table.bigInteger('idioawdpwi');
  });
  await knex.schema.alterTable('qhgpsovleg', function(table) {
    table.timestamp('kbcelqztyo');
    table.bigInteger('cfdzygdtqq');
    table.float('hszdbebeek');
    table.bigInteger('wxjkgggvdh');
  });
  await knex.schema.alterTable('axqgaihtpu', function(table) {
    table.bigInteger('mqeeaszgzs');
    table.boolean('xrhotidoex');
    table.text('jyytapwltx');
    table.text('xvipegpawd');
    table.boolean('qduyyclclk');
    table.integer('rgjlmmdpwu');
    table.string('eqgubxxdeh');
    table.integer('lpdalvgsmy');
  });
  await knex.schema.alterTable('zwdyduigel', function(table) {
    table.integer('aifwxatabo');
    table.text('njcxzdznun');
    table.timestamp('ijkwseczoj');
    table.text('zsfjfvprub');
    table.string('ghwvwqfbvz');
    table.timestamp('sdqraslhit');
    table.json('hlissgkndb');
  });
  await knex.schema.alterTable('csgitwjivt', function(table) {
    table.float('zumjzjxtvo');
    table.bigInteger('ufatlwhrrn');
    table.text('gpoeozahcc');
    table.text('ubobihmeqi');
    table.boolean('oiblfyxrze');
    table.string('psoosaobve');
    table.boolean('rdbaofzpqo');
    table.float('rxywsspvuo');
  });
  await knex.schema.alterTable('csgrubjhal', function(table) {
    table.string('cipsovoweq');
    table.json('ctarqkccts');
    table.timestamp('juundarenv');
    table.boolean('pxsbyrkzin');
    table.float('bwnmpfsfcv');
    table.float('ftxdqefryf');
    table.json('xqukjezyyx');
    table.bigInteger('upewivojgu');
    table.text('fhdggjwolk');
  });
  await knex.schema.alterTable('scfvjhsqsf', function(table) {
    table.float('czxojohncc');
    table.json('fubmcfilcs');
    table.text('ugsgxlbelm');
    table.string('vxznqszzuu');
    table.timestamp('jjweldaxca');
    table.timestamp('bsevbdijse');
    table.string('spwtmhhmum');
    table.boolean('itbnnwswog');
    table.float('anghgkvccl');
  });
  await knex.schema.alterTable('ecpozdaqmi', function(table) {
    table.json('cadhyairlm');
    table.integer('mgdwcvnzzy');
    table.boolean('zebtgqsytx');
    table.bigInteger('yhqqyhxgbg');
    table.json('sathfrtqrw');
    table.string('tquqbjhbpv');
    table.text('giobvfmngu');
    table.boolean('vbplvcjapa');
    table.boolean('rhwxdkumfs');
    table.text('sxtcodvktn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};