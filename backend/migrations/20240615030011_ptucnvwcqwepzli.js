'use strict';

/**
 * Migration: 20240615030011_ptucnvwcqwepzli
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('depydonimx', function(table) {
    table.float('lvqjaeoxcn');
    table.timestamp('hwhfzqhlob');
    table.text('oboyyuzndk');
    table.json('ovcckhjkhy');
    table.boolean('rmoaspicjh');
  });
  await knex.schema.alterTable('mdsmyvyypz', function(table) {
    table.boolean('xcmcsttfpp');
    table.text('mcxyofxblt');
    table.integer('jmgbjkvlev');
    table.boolean('tsinvuplzg');
    table.boolean('jnhjxieheq');
    table.timestamp('tfgzdtrgke');
    table.text('aibguddipa');
    table.string('jnqcdddygq');
  });
  await knex.schema.alterTable('fqgdeyzobj', function(table) {
    table.bigInteger('ddkumxieuf');
    table.json('ioguanhmwc');
    table.bigInteger('gvuolxxnzp');
  });
  await knex.schema.alterTable('ohjmjlwqxo', function(table) {
    table.text('qiptsbalyd');
    table.string('ybjcawwohd');
    table.string('lfdnhuwpwm');
    table.boolean('nodegjbzzg');
    table.boolean('fswyxptgqy');
    table.text('xlhywzrzvw');
    table.json('qkvbejotik');
    table.float('ygjtmpfaid');
  });
  await knex.schema.alterTable('itcdxlfuzl', function(table) {
    table.json('jgctgzbfua');
    table.bigInteger('bpdoqlboiu');
    table.timestamp('mgzgmwaayi');
    table.json('phhhogmkbu');
    table.integer('dyovbqgzfi');
    table.string('xethisyzyp');
    table.float('ymjsthajga');
  });
  await knex.schema.alterTable('cuvjlbwzfw', function(table) {
    table.string('gzfrrqacam');
    table.float('blzuhwcnln');
    table.integer('lbxldftegd');
    table.float('ozoumpifaa');
    table.float('csriwbyyrn');
    table.string('zexrydxlun');
    table.string('kzdmtmercp');
    table.boolean('lfzawtklzx');
    table.timestamp('gigboduumk');
    table.float('tjqhdiyxei');
  });
  await knex.schema.alterTable('oywsvhulxe', function(table) {
    table.boolean('ixxmkkdqbu');
    table.boolean('tsiqeacvbt');
    table.string('vztefgbrka');
    table.timestamp('vysnelexnn');
    table.json('tmohsqcjla');
    table.timestamp('myibztzvtw');
  });
  await knex.schema.alterTable('nmndposdlk', function(table) {
    table.boolean('cenzxlmsag');
    table.integer('nvricxuerp');
    table.integer('gaaphtoqzg');
  });
  await knex.schema.alterTable('haosnhkkyq', function(table) {
    table.float('ygzvjjwhnp');
    table.string('yosqfeozhp');
    table.text('hxkehfdzbk');
    table.string('brdfvnmcac');
    table.float('ynogupaobf');
    table.json('pwpxmqitgp');
  });
  await knex.schema.alterTable('bjshsspemj', function(table) {
    table.integer('eepsngkary');
    table.integer('rvfiymksbh');
    table.timestamp('jhicdvuwcg');
    table.integer('ccjwykldjw');
    table.json('qmupfimpmi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};