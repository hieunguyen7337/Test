'use strict';

/**
 * Migration: 20240128225830_sjbxrrpiauanuik
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hfffggqayn', function(table) {
    table.timestamp('qdopwchqiy');
    table.json('midaoeaydj');
    table.integer('arwwuigdbx');
    table.string('pmrwnovwxc');
    table.timestamp('usxdwquivs');
  });
  await knex.schema.alterTable('yezsnmpoia', function(table) {
    table.string('vtwhkypapx');
    table.json('jmvvymuzfo');
    table.timestamp('ypfintzpew');
    table.integer('eeytbbvqqk');
    table.text('wyftugrkff');
    table.json('vrcaxatbxl');
    table.bigInteger('maudcklelg');
    table.string('xwzgrpmstf');
    table.text('azfhzlhzjf');
  });
  await knex.schema.alterTable('xmabytjehf', function(table) {
    table.json('bphjahwqgl');
    table.float('vqsxqlmvkm');
    table.integer('tvbxyblswe');
    table.json('udhkyqnzri');
    table.bigInteger('swbxlphlhm');
    table.float('feicdhywlx');
    table.text('igjkubpfvk');
  });
  await knex.schema.alterTable('gmhrzznlsp', function(table) {
    table.boolean('qyjbkoanay');
    table.text('xmplxadnem');
    table.string('vqhlgnjpim');
    table.bigInteger('grtyxcdgwg');
    table.json('ajchgkfozg');
    table.string('oysnlybzzg');
    table.text('fzaywhrugs');
  });
  await knex.schema.alterTable('rlfajdppvh', function(table) {
    table.bigInteger('gtaxxdlqxe');
    table.float('hzisgbqnyy');
    table.json('gdmjpknpjc');
    table.integer('qkoczxnmuh');
    table.integer('evfaznakhh');
    table.bigInteger('utfdmcqpqp');
    table.boolean('daazjfpbpc');
    table.text('fgfmzjunav');
  });
  await knex.schema.alterTable('xiegevznrd', function(table) {
    table.bigInteger('mhuwsbpepg');
    table.integer('jrqtojztos');
    table.json('rtoqyaaspb');
  });
  await knex.schema.alterTable('edizgsqtmv', function(table) {
    table.float('wdpwtajwvj');
    table.boolean('kxnbadwykr');
    table.timestamp('ekpmlhlcmx');
    table.integer('mympjkaatd');
    table.float('dlurgvldmb');
    table.json('pspouiluce');
  });
  await knex.schema.alterTable('kdesnzjycz', function(table) {
    table.text('qpeeaiyfky');
    table.boolean('pogzcitjfa');
    table.text('bvbuvperzv');
    table.boolean('gofdswqqvf');
    table.json('hzctvcpvjp');
    table.bigInteger('cgharuysog');
    table.integer('rxufbrsgeo');
    table.boolean('cqqkqqhdso');
  });
  await knex.schema.alterTable('dfikinzgpf', function(table) {
    table.timestamp('zadmkazrsp');
    table.float('ongipygnvo');
    table.integer('lhxyejyuai');
    table.timestamp('mosmenbjql');
    table.boolean('evyhdnnplg');
    table.text('wtesjwxgjl');
    table.timestamp('tjaowpzeeg');
    table.string('ebghgxyilt');
    table.text('yzdohiojsz');
  });
  await knex.schema.alterTable('yuktqczkjs', function(table) {
    table.json('thbiuhxgnl');
    table.timestamp('hizfyslxyu');
    table.integer('gjnueaqcqs');
    table.timestamp('nlghewmliq');
    table.text('ndhcjukwqg');
  });
  await knex.schema.alterTable('nkenkvcrhp', function(table) {
    table.text('fnkwfxxmbq');
    table.string('ypmaeyprrs');
    table.float('ifdopkylyw');
    table.json('meqfeislwp');
    table.timestamp('owctzysqzg');
  });
  await knex.schema.alterTable('nsdrwvlpci', function(table) {
    table.boolean('bgwarhldqw');
    table.float('vqowyuqtmg');
    table.string('uppunvrfqb');
    table.bigInteger('fdlbvkxvam');
    table.timestamp('nmbmhlqkop');
    table.string('cldgvazmut');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};